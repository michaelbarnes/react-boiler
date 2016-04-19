var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className=".col-md-6 .col-md-offset-3">
      <img src={this.props.imageSource}/>
    </div>
  }
});
