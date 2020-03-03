
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('users')
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'admin', password: 'adminPass'}, //1
        {username:'user', password: 'user23'}, //2
        {username:'jess', password: 'novak'}, //3
        {username: 'bob', password: 'jones'},
        {username: 'john', password: 'smith'},
        {username: 'bill', password: 'clinton'}
      ]);
    // });
};
