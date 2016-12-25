"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation // To programatically navigate the user
    ],

    getInitialState: function() {
      return {
          author: {id: '', firstName: '', lastName: ''},
          errors: {}
      };
    },

    authorFormIsValid: function() {
        var formIsValid;
        this.state.errors = {}; // to keep track of errors and clear any previous errors

        if (this.state.author.firstName.length < 3 ){
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3 ){
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    setAuthorState: function(event) { // Called every keypress
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved');
        this.transitionTo('authors');
    },

    render: function(){
      return (
          <AuthorForm
              author={this.state.author}
              onChange={this.setAuthorState}
              onSave={this.saveAuthor}
              errors={this.state.errors} />
      );
  }
});

module.exports = ManageAuthorPage;