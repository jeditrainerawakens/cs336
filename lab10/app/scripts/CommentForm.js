import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

module.exports = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
  e.preventDefault();
  var author = this.state.author.trim();
  var text = this.state.text.trim();
  if (!text || !author) {
    return;
  }
  this.props.onCommentSubmit({author: author, text: text});
  // TODO: send request to the server
  this.setState({author: '', text: ''});
},
  render: function() {
    return (
      <div className="commentForm">
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={this.state.author}
        onChange={this.handleAuthorChange}
      />
      <input
        type="text"
        placeholder="Say something..."
        value={this.state.text}
        onChange={this.handleTextChange}
      />
        <input type="submit" value="Post" />
      </form>
      </div>
    );
  }
});
