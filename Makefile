default: dev


dev:
	npm run dev

db-push:
	 npm run db-push
# see: https://orm.drizzle.team/kit-docs/overview#schema-updates
db-generate:
	 npm run db-generate
db-migrate:
	 node migrate.mjs
db-studio:
	 npm run db-studio

db-drop:
	 npm run db-drop