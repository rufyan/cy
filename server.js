const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
 
 //get route and map to page, with route string mapped to query params
  server.get('/articles', (req, res) => {
    const actualPage = '/articles'
    const queryParams = { title: 'Article' } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/books', (req, res) => {
    const actualPage = '/books'
    const queryParams = { title: 'Book' } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/content', (req, res) => {
    const actualPage = '/content'
    const queryParams = { title: 'Content' } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})