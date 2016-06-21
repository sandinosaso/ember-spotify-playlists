/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var albumRouter = express.Router();

  albumRouter.get('/', function(req, res) {
    res.send({
      'album': []
    });
  });

  albumRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  albumRouter.get('/:id', function(req, res) {
    res.send({
      'album': {
        id: req.params.id
      }
    });
  });

  albumRouter.put('/:id', function(req, res) {
    res.send({
      'album': {
        id: req.params.id
      }
    });
  });

  albumRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/album', require('body-parser').json());
  app.use('/api/album', albumRouter);
};
