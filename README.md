# wwc-apac-2024
Workshop for Wise Woman Code APAC 2024

## Getting Started

### First, run the development server:

```bash
npm run dev
```

### Then start the docker containers for DB, backend and frontend.
Nextjs development mode by default will already have hot-reloading for frontend pages.
The development docker will use nodemon to ensure hot-reloading for the api routes too.
```bash
npm run docker:dev
```
### Once the DB is up, the following command will run the db migrations and see the database.
```bash
npm run setup:dev
```

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

# Connecting to the database 

DBeaver is one of the options you could use to connect to the database.

Host: localhost
Port: 5432
Databse: wise
Username: wwc-apac
Password: STRONGpass


# Note about Environment Variables

The `.env.local` and `.env.migrate` are included in this project because there are no real secrets in them - the local database user and password is not really a secret because they are already in the Dockerfile. If we were really to make a production-ready project, it should read the database env variables from somewhere safer like a secrets vault in AWS.

Nextjs will automatically load `.env.local` as `process.env` variables, but for knex commands we use `dotenv-cli` to load the env variables.

