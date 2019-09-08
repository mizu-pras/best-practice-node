const { app } = require('./server')
const { db } = require('./models/db')
const log = require('debug')('app:run')

async function run() {
    await db.sync()
    log('database is ready')
    app.listen(3000, () => {
	    log('Server started on http://localhost:3000')
    })
}

run()