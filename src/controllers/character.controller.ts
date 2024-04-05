import express from "express";

const app = express();

// Display list of all Authors.
exports.character_list = app.get('/', function (req, res) {
  // implement character service, get the list of characters and return it
  res.send("Hello World!");
});

exports.character_detail = app.get('/', function (req, res) {
  // implement character service, get the list of characters and return it
  res.send("Hello World!");
});