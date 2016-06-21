/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var albumsRouter = express.Router();

  albumsRouter.get('/', function(req, res) {
    res.send({
      'albums': [
      {
        id: 1000,
        artist: "Ramones",
        name: "Ramones",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-ramones.jpg",
        links: {
          tracks: "/api/albums/1000/tracks"
        }
      },
      {
        id: 1001,
        artist: "Ramones",
        name: "Leave Home",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-leave-home.jpg",
        links: {
          tracks: "/api/albums/1001/tracks"
        }
      },
      {
        id: 1002,
        artist: "Ramones",
        name: "Rocket to Russia",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-rocket-to-russia.jpg",
        links: {
          tracks: "/api/albums/1002/tracks"
        }
      },
      {
        id: 1003,
        artist: "Ramones",
        name: "Road to Ruin",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-road-to-ruin.jpg",
        links: {
          tracks: "/api/albums/1003/tracks"
        }
      },
      {
        id: 1004,
        artist: "Ramones",
        name: "End of the Century",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-end-of-the-century.jpg",
        links: {
          tracks: "/api/albums/1004/tracks"
        }
      },
      {
        id: 1005,
        artist: "Ramones",
        name: "Pleasant Dreams",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-pleasant-dreams.jpg",
        links: {
          tracks: "/api/albums/1005/tracks"
        }
      },
      {
        id: 1006,
        artist: "Ramones",
        name: "Subterranean Jungle",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-subterranean-jungle.jpg",
        links: {
          tracks: "/api/albums/1006/tracks"
        }
      },
      {
        id: 1007,
        artist: "Ramones",
        name: "Too Tough to Die",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-too-tough-to-die.jpg",
        links: {
          tracks: "/api/albums/1007/tracks"
        }
      },
      {
        id: 1008,
        artist: "Ramones",
        name: "Animal Boy",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-animal-boy.jpg",
        links: {
          tracks: "/api/albums/1008/tracks"
        }
      },
      {
        id: 1009,
        artist: "Ramones",
        name: "Halfway to Sanity",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-halfway-to-sanity.jpg",
        links: {
          tracks: "/api/albums/1009/tracks"
        }
      },
      {
        id: 1010,
        artist: "Ramones",
        name: "Brain Drain",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-brain-drain.jpg",
        links: {
          tracks: "/api/albums/1010/tracks"
        }
      },
      {
        id: 1011,
        artist: "Ramones",
        name: "Mondo Bizarro",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-mondo-bizarro.jpg",
        links: {
          tracks: "/api/albums/1011/tracks"
        }
      },
      {
        id: 1012,
        artist: "Ramones",
        name: "Acid Eaters",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-acid-eaters.jpg",
        links: {
          tracks: "/api/albums/1012/tracks"
        }
      },
      {
        id: 1013,
        artist: "Ramones",
        name: "Adios Amigos",
        image: "https://ng-music.s3-sa-east-1.amazonaws.com/data/ramones-adios-amigos.jpg",
        links: {
          tracks: "/api/albums/1013/tracks"
        }
      }
      ]
    });
  });

  albumsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  albumsRouter.get('/:id', function(req, res) {
    res.send({
      'albums': {
        id: req.params.id
      }
    });
  });

  albumsRouter.put('/:id', function(req, res) {
    res.send({
      'albums': {
        id: req.params.id
      }
    });
  });

  albumsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/albums', require('body-parser').json());
  app.use('/api/albums', albumsRouter);
};
