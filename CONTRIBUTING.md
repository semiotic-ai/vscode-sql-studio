# Contributing to the Semiotic SQL Studio

Welcome to the contributing guide for the Semiotic SQL Studio. This document outlines the best practices for contributing to our project, which operates on a trunk-based development model for approved developers and a branch-based approach for all other contributors. We practice continuous deployment with semantic release, emphasizing high-quality code, thorough testing, and comprehensive documentation.

## Workflow Models

### Trunk-Based Development for Approved Developers

Approved developers are encouraged to commit directly to the `main` branch. This approach facilitates rapid development and integration of features. If you're an approved developer:

- Ensure commits are small to minimize merge conflicts.
- Direct commits to `main` should adhere to our coding standards, include necessary tests, and pass all checks.
- Larger changes should be discussed in advance to coordinate with the team.

### Branch-Based Contributions for Non-Approved Developers

If you are an internal contributor, please contribute via Pull Requests (PRs) from branches.
If you are an external contributor, please contribute via Pull Requests (PRs) from your own forks.

- Base your work on the latest `main` branch and submit PRs for review.
- Follow our guidelines for commits and PRs to ensure a smooth review process.
- Engage with collaborators for feedback and approval.

### Becoming a Collaborator

To become an approved collaborator, demonstrate your commitment through:

- High-quality contributions and tests.
- Adherence to our coding and documentation standards.
- Active and constructive participation in discussions.
- Following best practices for commits and PRs.

Collaborator status is granted based on merit and the needs of the project.

## Commit Guidelines

Commit carefully:

1. Follow the project's code style and documentation standards.
2. Test new features or fixes thoroughly.
3. Keep commits focused on a single task.
4. Ensure commits pass all checks (tests, static analysis, formatting).
5. Adhere to [Conventional Commits](https://www.conventionalcommits.org/) for clear, consistent commit messages.

## Pull Request (PR) Process

For all PRs:

1. Link PRs to an issue for context and tracking.
2. PRs require at least one approval from a collaborator.
3. Ensure PRs pass all stages of our CI/CD pipeline before merging.
4. Keep PRs concise and focused to prevent significant branch divergence. PRs that do multiple things will be rejected.

## Continuous Deployment and Semantic Release

Our project employs continuous deployment and semantic release. Contributors should:

- Include comprehensive tests and documentation for every feature or fix.
- Follow semantic versioning guidelines for commit messages to aid in the automated release process.
- Understand that every commit on `main` could be deployed, so ensure it's always release-ready.

## Testing and Documentation

Contributors are expected to:

- Write meaningful tests for every new feature or bug fix.
- Update documentation accordingly to reflect changes or new additions.
- Ensure that existing tests pass and that their changes do not break the documentation.

## Code Reviews and Pair Programming

For approved developers, while we support live code reviews, we prefer pair programming, especially for complex features or important bug fixes. This approach fosters knowledge sharing and reduces the need for formal code reviews.

For non-approved developers, your PR will be subject to code review by an approved developer.

## Pre-commit Hooks

We use pre-commit hooks for code style and linting checks. Ensure that you configure them in your editor if needed. This step is crucial for maintaining code quality and consistency.

## Final Notes

Your contributions are vital to the success of the Semiotic SQL Studio. By following these guidelines, we can maintain a high-quality codebase, streamline the development process, and ensure that our project remains robust and scalable. Thank you for your contributions and commitment to excellence.

## Local Development

You can compile and run a local dev version by hitting F5 in any file in the project from VSCode.

Use `npm run test` to run the test suite.

Use `npm run format` to format the code.

There are precommit hooks that check if the code is correctly formatted. `npm run test` will also check formatting before running, so it's adviced to enable format on save.