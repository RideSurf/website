
exports.up = function(knex, Promise) {
  knex.schema.createTable('profile', table => {
      table.increments();
      table.string('firstname');
      table.string('lastname');
    });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('profile');
};
