process.env.NODE_ENV = 'test';

var chai = require('chai');
var express = require('express');

global.__server = __dirname + '../server';
global.__client = __dirname + '../client';

var db = require(__server + '/lib/db');


global.expect = chai.expect;

global.should = chai.should();