const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const redirect_url = process.env.REDIRECT_URL || "https://example.com"

app.get('/', (req, res) => {
    res.redirect(redirect_url)
})

app.listen(port, () => {
    console.log(`Redirect app listening on port ${port}`)
})
