# wwc-apac-2024
Workshop for Wise Woman Code APAC 2024

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Run development docker

```bash
npm run docker:dev
```

This will bring up docker containers for the database, Nextjs api routes and Nextjs frontend.
Nextjs development mode by default will already have hot-reloading for frontend pages.
The development docker will use nodemon to ensure hot-reloading for the api routes too.

# Run database migrations

After you bring up the docker containers, run the migration:

```bash
npm run knex migrate:up
```

# Environment Variables

Create your own `.env.local` file using the `.env.local.example` as an example.

Nextjs will automatically load `.env.local` as `process.env` variables, but for knex commands we use `dotenv-cli` to load the env variables.

# Connecting to the database 

DBeaver is one of the options you could use to connect to the database, unless you love the command line for postgres.

# Note about volumes 
renew-anon-volumes is useful for always refreshing node modules volume when installing new packages 
however it always creates new volumes so you might need to docker prune volumes more often when using it
