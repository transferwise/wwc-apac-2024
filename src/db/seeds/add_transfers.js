const tableName = 'transfers';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    await knex(tableName).del()
    await knex(tableName).insert([
        {transferId: "123", paymentMode: "bank", paymentReference: "forex",
            sourceAmount: 12.23, sourceCurrency: "sgd", targetCurrency:"usd"}
    ]);
};
