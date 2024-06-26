/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:HFs8ZjBSORc0@ep-crimson-hat-a1tz1mva.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require',
    }
  };
  