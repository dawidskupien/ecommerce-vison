import { defineConfig, Config } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/user/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url:  "postgres://default:c4Ol6sigtKAw@ep-steep-hat-a2k9iphd-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require",
  },
}) as Config;
