const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

//essa função executa a criação das tabelas
async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('')

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
}

module.exports = migrationsRun