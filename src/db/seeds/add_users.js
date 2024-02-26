const tableName = 'users';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex(tableName).del()
  await knex(tableName).insert([
    {email: "hello@wise.com", password: "12345", role: "admin", firstname: "moon", lastname: "star"},
    {email: "bye@gmail.com", password: "123456", firstname: "Pluto", lastname: "Mars"},
    {email: "goodbyegoodbye@msn.com", password: "456789", firstname: "Alex", lastname: "Jones"}
  ]);
};
