const app = require('express')()

app.get('/', (_, res) => {
  console.log('req')
  res.send('ok')
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(port)
})
