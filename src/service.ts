import { parse } from './graphtables';
import type { Layout } from './graphtables/layout';

interface ISubgraphQuery {
	readonly query: string;
	readonly variables: Record<string, unknown>;
	readonly operationName: string;
	readonly extensions: Record<string, unknown>;
}

const SEARCH_TEMPLATE: ISubgraphQuery = {
	query: `query SearchbyName($search:String!) {
		subgraphMetadataSearch(first:20,text:$search)
		{
		  id,
		  displayName,
		  image,
		  description,
		  subgraph {
			id,
			currentVersion {
			  id,
			  subgraphDeployment {
				id,
				 indexerAllocations(where: {activeForIndexer_not: null}) {
					  activeForIndexer {
						id
					  }
				},
				manifest {
					network
					,schema {
						id
					}
				}
			  }
			}
		  }
		}
	  }
    `,
	variables: { search: '' },
	operationName: 'SearchbyName',
	extensions: {}
};

interface ISubgraphSearchResult {
	readonly data: {
		readonly subgraphMetadataSearch: {
			readonly id: string;
			readonly displayName: string;
			readonly description: string;
			readonly image: string;
			readonly subgraph: {
				readonly id: string;
				readonly currentVersion: {
					readonly id: string;
					readonly subgraphDeployment: {
						readonly id: string;
						readonly indexerAllocations: {
							readonly activeForIndexer: {
								readonly id: string;
							};
						}[];
						readonly manifest: {
							readonly schema: {
								readonly id: string;
							};
							readonly network: string;
						};
					};
				};
			};
		}[];
	};
}

/*
 * Basic subgraph and current version/deployment information
 */
export interface ISubgraphInfo {
	readonly id: string;
	readonly displayName: string;
	readonly description: string;
	readonly image: string;
	readonly currentVersion: string;
	readonly deploymentId: string;
	readonly network: string;
	readonly deploymentSchemaId: string;
	readonly activeIndexerAllocations: number;
}

function CheapCopy<T>(value: T): T {
	return JSON.parse(JSON.stringify(value));
}

const SUBGRAPH_API_ENDPOINT =
	'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-arbitrum';
const PAGINATED_SUBGRAPH_TEMPLATE: ISubgraphQuery = {
	query: `query HomeSubgraphsPageContent__Subgraphs($_v0_skip: Int, $_v1_first: Int, $_v2_orderBy: Subgraph_orderBy, $_v3_orderDirection: OrderDirection, $_v4_where: Subgraph_filter, $_v5_subgraphError: _SubgraphErrorPolicy_!) {
  __typename
  NETWORK__subgraphs: subgraphs(
    where: $_v4_where
    orderBy: $_v2_orderBy
    orderDirection: $_v3_orderDirection
    first: $_v1_first
    skip: $_v0_skip
    subgraphError: $_v5_subgraphError
  ) {
    ...SubgraphCard__Subgraph
  }
}

fragment SubgraphCard__Subgraph on Subgraph {
  id
  active
  entityVersion
  metadata {
    displayName
    description
    image
  }
  createdAt
  updatedAt
  currentSignalledTokens
  owner {
    id
    metadata {
      image
    }
    defaultDisplayName
    defaultName {
      id
      name
    }
  }
  currentVersion {
    id
    subgraphDeployment {
      id
      queryFeesAmount
      stakedTokens
      manifest {
        network
		schema {
			id
		}
      }
    }
  }
}
`,
	variables: {
		_v4_where: {
			active: true,
			entityVersion: 2,
			metadata_: {
				displayName_not: ''
			}
		},
		_v2_orderBy: 'currentSignalledTokens',
		_v3_orderDirection: 'desc',
		_v1_first: 5,
		_v0_skip: 0,
		_v5_subgraphError: 'deny'
	},
	operationName: 'SearchbyName',
	extensions: {}
};

interface PaginatedSubgraph {
	readonly data: {
		readonly NETWORK__subgraphs: {
			readonly active: boolean;
			readonly createdAt: number;
			readonly currentSignalledTokens: string;
			readonly currentVersion: {
				readonly id: string;
				readonly subgraphDeployment: {
					readonly id: string;
					readonly manifest: {
						readonly network: string;
						readonly schema: {
							readonly id: string;
						};
					};
					readonly queryFeesAmount: string;
					readonly stakedTokens: string;
				};
			};
			readonly entityVersion: string;
			readonly id: string;
			readonly metadata: {
				readonly description: string;
				readonly displayName: string;
				readonly image: string;
			};
			readonly owner: {
				readonly defaultDisplayName: string;
				readonly defaultName: {
					readonly id: string;
					readonly name: string;
				};
				readonly id: string;
				readonly metadata: {
					readonly image: string;
				};
			};
			readonly updatedAt: number;
		}[];
	};
}

export async function getSubgraphs(first: number, skip: number): Promise<ISubgraphInfo[]> {
	const body = CheapCopy(PAGINATED_SUBGRAPH_TEMPLATE);
	body.variables._v1_first = first;
	body.variables._v0_skip = skip;
	const response: PaginatedSubgraph = await CallGraphQL(SUBGRAPH_API_ENDPOINT, body);

	return response.data.NETWORK__subgraphs.map((subgraph) => ({
		id: subgraph.id,
		displayName: subgraph.metadata.displayName,
		description: subgraph.metadata.description,
		image: subgraph.metadata.image,
		currentVersion: subgraph.currentVersion.id,
		deploymentId: subgraph.currentVersion.subgraphDeployment.id,
		network: subgraph.currentVersion.subgraphDeployment.manifest.network,
		deploymentSchemaId: subgraph.currentVersion.subgraphDeployment.manifest.schema.id,
		activeIndexerAllocations: 0
	}));
}

async function CallGraphQL<B, R>(endpoint: string, body: B, abortSignal?: AbortSignal): Promise<R> {
	const response = await fetch(endpoint, {
		headers: {
			accept: 'application/graphql-response+json, application/json, multipart/mixed',
			'accept-language': 'en-US,en;q=0.5',
			'content-type': 'application/json'
		},
		body: JSON.stringify(body),
		method: 'POST',
		signal: abortSignal
	});

	// @ts-ignore
	const json_response: R = (await response.json()) as R;

	return json_response;
}

/**
 * Search for subgraphs by name or description from a graph network subgraph API endpoint
 * @param endpoint url of the graph network subgraph API endpoint (ie: https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-arbitrum)
 * @param search text to search in both display name and description of the subgraph
 * @returns a list of `ISubgraphInfo` matching the search criteria
 */
export async function SearchSubgraph(endpoint: string, search: string): Promise<ISubgraphInfo[]> {
	const body = CheapCopy(SEARCH_TEMPLATE);

	body.variables.search = search;

	const json_response: ISubgraphSearchResult = await CallGraphQL(endpoint, body);

	const result: ISubgraphInfo[] = json_response.data.subgraphMetadataSearch.map((meta) => {
		return {
			id: meta.subgraph.id,
			displayName: meta.displayName,
			description: meta.description,
			image: meta.image,
			currentVersion: meta.subgraph.currentVersion.id,
			deploymentId: meta.subgraph.currentVersion.subgraphDeployment.id,
			network: meta.subgraph.currentVersion.subgraphDeployment.manifest.network,
			deploymentSchemaId: meta.subgraph.currentVersion.subgraphDeployment.manifest.schema.id,
			activeIndexerAllocations:
				meta.subgraph.currentVersion.subgraphDeployment.indexerAllocations.length
		};
	});

	return result;
}

const SCHEMA_QUERY_TEMPLATE: ISubgraphQuery = {
	query: `query GetLayout($deploymentSchemaId: ID!) {
		subgraphDeploymentSchema(id:$deploymentSchemaId) {
			schema
	  }
	}`,
	variables: { deploymentSchemaId: '' },
	operationName: 'GetLayout',
	extensions: {}
};

interface ISchemaResponse {
	readonly data: {
		readonly subgraphDeploymentSchema: {
			readonly schema: string;
		};
	};
}

/**
 * Gets the database layout of a subgraph deployment by parsing the graphql schema based
 * on graph-node implementation
 * @param endpoint url of the graph network subgraph API endpoint (ie: https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-arbitrum)
 * @param deploymentSchemaId deployment schema id of the subgraph
 * @returns database layout
 */
export async function GetLayout(endpoint: string, deploymentSchemaId: string): Promise<Layout> {
	const body = CheapCopy(SCHEMA_QUERY_TEMPLATE);

	body.variables.deploymentSchemaId = deploymentSchemaId;

	const json_response: ISchemaResponse = await CallGraphQL(endpoint, body);

	const result = parse(json_response.data.subgraphDeploymentSchema.schema);

	return result;
}

const SQL_QUERY_TEMPLATE: ISubgraphQuery = {
	query: `query SQL($query: String!) {
        sql(input:{query : $query}) {
			rowCount,
			rows,
			columns
        }
    }`,
	variables: { query: '' },
	operationName: 'SQL',
	extensions: {}
};

export interface IQueryResult {
	readonly data: {
		readonly sql: {
			readonly rowCount: number;
			readonly rows: [{ (key: string): string | number }];
			readonly columns: string[];
		};
	};
}

/**
 * Executes a SQL query on a SQL enabled graph-node
 * @param endpoint url of the graphql endpoint of subgraph
 * @param query SQL query to execute
 * @returns result of the query
 */
export async function ExecuteSQL(
	endpoint: string,
	query: string,
	abortSignal?: AbortSignal
): Promise<IQueryResult> {
	const body = CheapCopy(SQL_QUERY_TEMPLATE);

	body.variables.query = query;

	const json_response: IQueryResult = await CallGraphQL(endpoint, body, abortSignal);

	return json_response;
}
