const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const redirect_url = process.env.REDIRECT_URL

if (typeof redirect_url === 'undefined') {
  throw new Error("REDIRECT_URL environment variable is undefined.")
}

app.get('/', (req, res) => {
    res.redirect(redirect_url)
})

app.listen(port, () => {
    console.log(`Redirect app listening on port ${port}`)
})
