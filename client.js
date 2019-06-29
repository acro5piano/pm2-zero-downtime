const got = require('got')
const port = process.env.PORT || 6000

async function loop() {
  try {
    const res = await got(`http://localhost:${port}`)
    console.log(`${new Date()} => ${res.body}`)
    setTimeout(loop, 50)
  } catch {
    console.log('died')
  }
}

loop()
