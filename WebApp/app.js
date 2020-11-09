const express = require('express')
const app = express()
const port = process.env.PORT||3000;
const appInsights = require("applicationinsights");



appInsights
  .setup("8c59d630-c433-4764-a5e7-492c5d1a688a")
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .start()

app.set("view engine", "jade");
  
app.get('/', (req, res) => {
  res.render("index");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

