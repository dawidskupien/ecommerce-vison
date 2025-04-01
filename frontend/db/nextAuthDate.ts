// drizzle-adapter/customType.ts
import { customType } from "drizzle-orm/pg-core";

export const nextAuthDate = customType<{
  data: Date;
  driverData: string;
}>({
  dataType(config) {
    return "text";
  },
  fromDriver(value: string): Date {
    return new Date(value);
  },
  toDriver(value: Date) {
    return value.toISOString();
  },
});
