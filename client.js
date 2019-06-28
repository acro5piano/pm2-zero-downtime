const got = require('got')

async function loop() {
  try {
    const res = await got('http://localhost:6000')
    console.log(res.body)
    setTimeout(loop, 50)
  } catch {
    console.log('died')
  }
}

loop()
