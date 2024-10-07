require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const Router = require('./src/Routes/Route')
const app = express()
const port = process.env.PORT|| 3005;
// const { runCronJob } = require('./src/CronJobWishes/cronJobs');

app.use(bodyParser.json());

app.use('/', Router);
// runCronJob();
app.listen(port, () => {
  console.log(`service is running at port ${port}`)
})
