export class TokenLocation {
  startIndex: number;
  stopIndex: number;
  lineStart: number;
  lineEnd: number;
  streamIndex: number;

  constructor(
    lineStart: number,
    lineEnd: number,
    startIndex: number,
    stopIndex: number,
    streamIndex: number
  ) {
    this.lineStart = lineStart;
    this.lineEnd = lineEnd;
    this.startIndex = startIndex;
    this.stopIndex = stopIndex;
    this.streamIndex = streamIndex;
  }

  getToken(input: string): string {
    return input.substring(this.startIndex, this.stopIndex + 1);
  }

  static clone(token: TokenLocation): TokenLocation {
    return new TokenLocation(
      token.lineStart,
      token.lineEnd,
      token.startIndex,
      token.stopIndex,
      token.streamIndex
    );
  }
}
