const tableName = 'transfers';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
    await knex(tableName).del()
    await knex(tableName).insert([
        {transferId: "1", paymentMode: "Bank Transfer", paymentReference: "forex",
            sourceAmount: 12.23, sourceCurrency: "SGD", targetCurrency:"USD", targetAmount: "XX"},
        {transferId: "2", paymentMode: "Bank Transfer", paymentReference: "forex",
            sourceAmount: 12.23, sourceCurrency: "SGD", targetCurrency:"USD", targetAmount: "XX"},
        {transferId: "3", paymentMode: "Bank Transfer", paymentReference: "forex",
            sourceAmount: 12.23, sourceCurrency: "SGD", targetCurrency:"USD", targetAmount: "XX"}
    ]);
};
