import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.API_URL,
  documents: "src/**/*.gql",
  config: {
    // #Сгенерированные файлы напрямую менять нельзя (!), только через обертки / доп. файлы
    content: process.env.API_GENCOMMENT,
    //  Работа с запросами ведется через react-hooks
    withHooks: true,
    //  Из типов для схемы исключается служебное поле __typename
    skipTypename: true,
    //  Все типы из схемы и запросов - иммутабельны
    immutableTypes: true,
    //  Типы генерируются на лету, без Pick - для чистоты информации по типу
    preResolveTypes: true,
  },
  generates: {
    "src/types.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".gen.ts",
        baseTypesPath: "shared/api/models.gen.ts",
      },
      plugins: ["add", "typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
