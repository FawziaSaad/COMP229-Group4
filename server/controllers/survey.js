let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to the survey model
let Survey = require('../models/survey');