// "use strict"; // Disabling check because we can't runt strict mode. Need global vars

var React = require ('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div class="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;