const express = require('express');
const cors = require('cors');
const path = require('path')
const { createPdf } = require('./createPDF.js')

const app = express();
const port = 8080;

// app.options('*', cors());
app.use(express.static(path.resolve(__dirname, "client")));

// Handling JSON datas
app.use(cors());
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname));

app.get('/hello', (req, res) => {
  res.send('hello world');
})

app.get('/download', async (req, res) => {
  createPdf()
    .then(response => res.send(response))
    .catch(err => res.send(err))

})

app.listen(port, () => {
  console.log('🚀 app start on 8080 PORT');
})