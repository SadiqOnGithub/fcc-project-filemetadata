require('dotenv').config()
const express = require('express');
const cors = require('cors');
const multer = require('multer');

// custom module
const { errorHandler } = require('./middleware/errorHandler');
const fileAnalyses = require('./controller/api');


// config
const app = express();
const upload = multer()


// middleware
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


// routes
app.get('/', (req, res) => res.sendFile(process.cwd() + '/views/index.html'));
app.post('/api/fileanalyse', upload.single('upfile'), fileAnalyses)


// err
app.use(errorHandler);



// server is running
app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + port)
});
