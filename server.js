const app = require('express')()

app.get('/', (_, res) => {
  console.log('req')
  res.send('ok')
})

const port = process.env.PORT || 6000

app.listen(port, () => {
  console.log(port)
})

process.on('message', message => {
  console.log(message)
})
