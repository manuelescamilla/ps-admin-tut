"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routers, function(Handler){
    React.render(<Handler />, document.getElementById('app'))
});