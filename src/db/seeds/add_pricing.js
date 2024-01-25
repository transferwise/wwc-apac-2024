const tableName = 'pricing';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(tableName).del()
  await knex(tableName).insert([
    {id: 1, transferId: 1, fee: 0.01486, conversionRate: 0.74},
    {id: 2, transferId: 2, fee: 0.01486, conversionRate: 0.74},
    {id: 3, transferId: 3, fee: 0.01486, conversionRate: 0.74},
  ]);
};
