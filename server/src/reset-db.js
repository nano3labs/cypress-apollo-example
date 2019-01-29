const SQL = require('sequelize')

module.exports = function reset() {
  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite'
  })

  db.query('DELETE FROM trips;')
}
