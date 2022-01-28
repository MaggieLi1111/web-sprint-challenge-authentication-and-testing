
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:"Anthony", password:56781234},
        {username: "Brian", password:12345678},
        {username: "Leo", password:"1234abcd"}
      ]);
    });
};
