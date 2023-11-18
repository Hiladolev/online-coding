class CodeBlock {
  public id: number;
  public title: string;
  public code: string;
  public entrances?: number;

  constructor(id: number, title: string, code: string, entrances?: number) {
    this.id = id;
    this.title = title;
    this.code = code;
    this.entrances = entrances;
  }
}

export default CodeBlock;
