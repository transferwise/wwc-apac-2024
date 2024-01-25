const tableName = 'rates';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex(tableName).del()
  await knex(tableName).insert([
    {id: 1, rate: 0.75, sourceCurrency: "sgd", targetCurrency: "usd", date: knex.fn.now()}
  ]);
};
