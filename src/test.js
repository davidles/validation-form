const data = require('./database/data.json');
const path = require('path');
const fs   =  require('fs')

const filePath = path.join(__dirname,  './database/data.json');
const dataJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'))


console.log(dataJson)