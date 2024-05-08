CREATE TABLE IF NOT EXISTS "url" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"redirectTo" varchar(2048) NOT NULL,
	CONSTRAINT "url_redirectTo_unique" UNIQUE("redirectTo")
);
