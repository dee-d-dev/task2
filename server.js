const express = require("express")
const app = express()

const port = process.env.port || 3000

app.get("/", (req, res) => {
    res.status(200).json({
        "slackUsername": "Adedigba Adedotun",
        "backend": true,
        "age": 22,
        "bio": "I am currently an hng9 backend engineering intern"
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})