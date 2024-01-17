/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('transfers', function (table) {
        table.increments('id').primary();
        table.integer('transferId').notNullable();
        table.enum('paymentMode', ['bank', 'balance']).notNullable().defaultTo('balance');
        table.string('paymentReference').notNullable();
        table.double('sourceAmount',2,2).notNullable();
        table.string('sourceCurrency').notNullable();
        table.string('targetCurrency').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable(tableName);
};
