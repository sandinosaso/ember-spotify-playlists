export default function() {
  this.urlPrefix = '/';
  this.namespace = 'api';
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  /* Socketio used by ember-electron */
  this.passthrough('http://localhost:30820/**/');

  this.get('albums', function(schema) {
    return {
        albums: schema.db.albums
    };
  });

  this.get('albums/:id', function(schema, request) {
    let albumId = +request.params.id;
    return {
        album: schema.db.albums.find(albumId)
    };
  });

  this.get('albums/:id/tracks', function(schema, request) {
    let albumId = +request.params.id;
    return {
        tracks: schema.db.tracks
    };
  });

}
