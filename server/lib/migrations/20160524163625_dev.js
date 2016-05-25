
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('locations', function(table) {
      table.increments('id').primary();
      table.integer('facility_id');
      table.string('restaurant_name');
      table.string('address');
      table.string('address_city');
      table.string('address_state');
      table.string('address_zip');
    }),

    knex.schema.createTable('inspections', function(table) {
      table.increments('id').primary();
      table.string('inspection_date');
      table.string('score');
      table.string('process_description');
      table.integer('location_id').references('id').inTable('locations')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('locations'),
    knex.schema.dropTable('inspections')
  ])
};
