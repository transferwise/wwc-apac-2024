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

This will also wait for the Postgres db to be up, run the db migrations and seed the database.

# Run all tests

```bash
npm run test
```

# Run a specific test

For example,
Running the tests in the "transfers" folder:

```bash
npm run test -- "transfers"

npm run test -- "api/transfers"

npm run test -- "api/transfers/route.test.js"
```

Any of the above will work because jest does a regex search of the tests.


# Run database migrations

After you bring up the docker containers, run the migration:

```bash
npm run knex migrate:latest
```

# Seed database with sample data

```bash
npm run knex seed:run
```

According to the knex guide, seed files are executed in alphabetical order. Unlike migrations, every seed file will be executed when you run the command. You should design your seed files to reset tables as needed before inserting data.

# Note about Environment Variables

The `.env.local` and `.env.migrate` are included in this project because there are no real secrets in them - the local database user and password is not really a secret because they are already in the Dockerfile. If we were really to make a production-ready project, it should read the database env variables from somewhere safer like a secrets vault in AWS.

Nextjs will automatically load `.env.local` as `process.env` variables, but for knex commands we use `dotenv-cli` to load the env variables.

# Connecting to the database 

DBeaver is one of the options you could use to connect to the database, unless you love the command line for postgres.
