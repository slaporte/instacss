define([
  'underscore',
  '../models/cssprop'
], function(_, CSSProp) {

  return {

    mapping: {

      'read' : {
        'url'         : '/cssprop/:name',
        'method'      : 'get',
        'description' : 'returns docuemnt for css property name',
        'auth'        : false
      },

      'read_all' : {
        'url'         : '/cssprop',
        'method'      : 'get',
        'description' : 'returns everything',
        'auth'        : false
      },


    },

    read: function(req, res) {
      CSSProp.findOne({ name: req.params.name }, function(error, cssprop) {
        if (!error && cssprop) {
          res.header('Content-Type', 'application/json');
          res.send(JSON.stringify(cssprop), 200);
        } else {
          res.send('could not find css prop with name: ' + req.params.name, 404);
        }
      });
    },

    read_all: function(req, res) {
      CSSProp.find({}, function(error, cssprop) {
        if (!error && cssprop) {
          res.header('Content-Type', 'application/json');
          res.send(JSON.stringify(cssprop), 200);
        } else {
          res.send('error', 404);
        }
      });
    },

  };
});
