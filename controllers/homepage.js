'use strict';
var views = require('co-views');
var parse = require('co-body');

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

module.exports.index = function *index() {
  this.body = yield render('homepage/index');
};

module.exports.about = function *about() {
  this.body = yield render('homepage/about');
};

module.exports.contact = function *contact() {
  this.body = yield render('homepage/contact');
};

module.exports.register = function *register() {
  this.body = yield render('homepage/register');
};

module.exports.price = function *price() {
  this.body = yield render('homepage/price');
};

