const { MongoClient } = require('mongodb')
// const url = 'mongodb://admin:Kimagure232@192.168.0.2:27017/admin'
const url = 'mongodb://localhost:27017'
const dbName = 'admin'

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    // const db = client.db(dbName).admin()
    // db.command({ ping: 1 }).then((data) => {
    //     console.log(data)
    //     client.close()
    // })
    // db.command({ whatsmyuri: 1 }).then((data) => {
    //     console.log(data)
    // })

    // db.command({ serverStatus: 1 }).then(console.log)
    // db.listDatabases((err, dbs) => {
    //     if (err) return console.error(err)
    //     console.log(dbs)
    //     // client.close()
    // })
})