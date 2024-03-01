const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.raw({ type:'*/*' }))

app.all('*', (req, res) => {
  console.log(new Date(), req.method, req.originalUrl)

  console.log('Headers:')
  console.log(req.rawHeaders)
  
  console.log('Body:')
  console.log(Object.keys(req.body).length === 0 ? '- empty -' : req.body.toString('utf8'))

  res.send()
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})