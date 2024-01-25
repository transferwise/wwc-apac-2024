const tableName = 'pricing';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del()
  await knex(tableName).insert([
    {id: 1, transferId: 123, fee: 0.01486, conversionRate: 0.74}
  ]);
};
