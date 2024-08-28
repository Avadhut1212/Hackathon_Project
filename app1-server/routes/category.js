const express = require('express')
const db = require('../db')
const utils = require('../utils')

// import multer/

const router = express.Router()

router.get('/', (request, response) => {
  const statement = `select id, title, description from categories;`
  db.pool.query(statement, (error, categories) => {
    response.send(utils.createResult(error, categories))
  })
})

// use the middleware (upload) to upload a single 'icon'
router.post('/', (request, response) => {
  const { title, description } = request.body

  // get the  name of uploaded file
  // const fileName = request.file.filename

  const statement = `insert into categories (title,description) values (?, ?)`
  db.pool.execute(
    statement,
    [title, description],
    (error, categories) => {
      response.send(utils.createResult(error, categories))
    }
  )
})

module.exports = router
