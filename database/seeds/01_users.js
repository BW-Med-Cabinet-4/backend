exports.seed = function(knex) {
  // // Deletes ALL existing entries
   return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'admin', password: 'adminPass'}, //1
        {username:'user', password: 'user23'}, //2
        {username:'jess', password: 'novak'}, //3
        {username: 'jasmine', password: 'terry'},
        {username: 'test', password: 'testuser'},
        {username: 'biggie', password: 'smalls'}
      ]);
    });
};