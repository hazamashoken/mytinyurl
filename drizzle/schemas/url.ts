import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const urls = pgTable("url", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid(10)),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
  redirectTo: varchar("redirectTo", { length: 2048 }).notNull().unique(),
});
