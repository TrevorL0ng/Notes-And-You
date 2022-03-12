//Bringing in modules needed and setting variables
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3003;
const dirPath = path.join(__dirname, "/public");

