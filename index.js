const express = require("express")
const https = require("https")
const app = express()
const port = 3000

app.get("/*", (req, res, next) => {
const pathSegments = req.path.split('/');
 const rocketPath = pathSegments[2]
  https.request(new URL("https://rocketbotroyale.winterpixel.io/" + req.path), (resp) => {
    res.contentType(resp.headers["content-type"])
    resp.pipe(res)
  }).end()
})
console.log("this should work")
console.log(`Running on port ${port}`)
app.listen(port)
