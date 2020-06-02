import FileUtils  from './utils/fileUtils'

export class RuleTranslator {

  private readonly rule: string;

  constructor(rule: string) {
    this.rule = rule;
  }

  async process(): Promise<string> {
    return '';
  }
}
