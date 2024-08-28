const express = require('express')
const db = require('../db');
const { createResult } = require('../utils');
const utils = require('../utils')
const router = express.Router()

router.get('/getblogs', (request, response) => {
    const statement = `select blogs.id, blogs.title, blogs.contents,user.full_name  ,categories.title as category  from blogs,user,categories where user.id = blogs.user_id and blogs.category_id=categories.id;`
    db.pool.query(statement, (error, categories) => {
      response.send(utils.createResult(error, categories))
    })
  })

router.post('/myblogs',(req,res)=>{
    const {id}= req.body
    const statement = 'select blogs.id, blogs.title, blogs.contents,user.full_name  ,categories.title as category  from blogs,user,categories where user.id = blogs.user_id and blogs.category_id=categories.id  and user_id =?;'
    db.pool.query(statement, [id],(error, data) => {
        res.send(utils.createResult(error, data))
      })
})

router.post('/addblog',(req,res)=>{
    const {title,contents,user_id,category_id}= req.body;

    const statement = 'insert into blogs (title,contents,user_id,category_id) values (?,?,?,?);'

    db.pool.execute(statement,[title,contents,user_id,category_id],(error,data)=>{
        res.send(createResult(error,data))
    })

})

router.post('/editblog',(req,res)=>{
    const {title,contents,id}= req.body;

    const statement = 'update blogs set title=?,contents=? where id =?;'

    db.pool.execute(statement,[title,contents,id],(error,data)=>{
        res.send(createResult(error,data))
    })

})

router.post('/deleteblog',(req,res)=>{
    const {id}= req.body;

    const statement = 'delete from blogs where id =?;'

    db.pool.execute(statement,[id],(error,data)=>{
        res.send(createResult(error,data))
    })

})

router.post('/search',(req,res)=>{
    const {search}= req.body;
    const searchValue = `%${search}%`;
    const statement = "select blogs.id, blogs.title, blogs.contents,user.full_name  ,categories.title as category  from blogs,user,categories where user.id = blogs.user_id and blogs.category_id=categories.id and  (blogs.title like ? or blogs.contents like ?)  ;"
    console.log(statement)
    db.pool.execute(statement,[searchValue, searchValue],(error,data)=>{
        res.send(createResult(error,data))
        console.log(statement)
    })

})

router.post('/details',(req,res)=>{
    const {id}= req.body;
    const searchValue = `%${id}%`;
    const statement = "select blogs.id, blogs.title, blogs.contents,user.full_name  ,categories.title as category  from blogs,user,categories where user.id = blogs.user_id and blogs.category_id=categories.id and  blogs.id like ?;"
    console.log(statement)
    db.pool.execute(statement,[searchValue],(error,data)=>{
        res.send(createResult(error,data))
        console.log(statement)
    })

})

module.exports = router