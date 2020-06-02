# Test Cases

## 1 - Fact with No Rules found (No rule for organization)

```sh
clear && node --require ts-node/register src/index.ts -f ./data/test_case_1_facts.json -r ./data/test_case_1_rules.json
```

## 2 - Fact with Rules found (Two rules for organization, one rule matching)

```sh
clear && node --require ts-node/register src/index.ts -f ./data/test_case_2_facts.json -r ./data/test_case_2_rules.json
```

## 3 - Fact with Rules found (Two rules for organization, two rules matching)

```sh
clear && node --require ts-node/register src/index.ts -f ./data/test_case_3_facts.json -r ./data/test_case_3_rules.json
```

## 4 - Fact with Rules found, no matching rules (Two rules for organization, zero rules matching)

```sh
clear && node --require ts-node/register src/index.ts -f ./data/test_case_4_facts.json -r ./data/test_case_4_rules.json
```

