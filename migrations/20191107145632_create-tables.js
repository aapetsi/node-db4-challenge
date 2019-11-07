exports.up = function(knex) {
  return knex.schema.createTable('recipe', recipe => {
    recipe.increments();
    recipe
      .string('recipe', 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {};
