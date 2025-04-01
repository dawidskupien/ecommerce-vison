import type { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
  schema: "http://localhost:1337/graphql",
  documents: ["../frontend/graphql/**/*.ts"],
  // noSilentErrors: true,
  generates: {
    "./graphql/_generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query"
      ],
      config: {
        fetcher: "graphql-request",
        exposeFetcher: true,
        exposeQueryKeys: true,
        skipTypename: true,
        optimizeDocumentNode: true,
        legacyMode: false,
        reactQueryVersion: 5,
        // avoidOptionals: true,
        maybeValue: "T | undefined",
        // maybeValue: "T",
        // avoidOptionals: {
        //   inputValue: true,
        //   field: true,
        //   object: true,
        //   defaultValue: true
        // }


        // typesPrefix: "I_",
      },
    },
  },
};
export default config;
