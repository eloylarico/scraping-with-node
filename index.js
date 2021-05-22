const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const app = express();
const PORT = 8000;



  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));