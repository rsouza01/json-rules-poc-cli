import FileUtils  from './utils/fileUtils'

export class RuleRepository {

  private readonly rules: any;

  constructor(rulesFilePath: string) {
    this.rules = FileUtils.loadFile(rulesFilePath);
  }

  async loadRules(fact: any): Promise<any> {
    return this.rules.filter(element => {
      return element.organization !== undefined && element.proposition !== undefined &&
        element.organization === fact.organization &&
        element.proposition === fact.proposition;
    });
  }
}
