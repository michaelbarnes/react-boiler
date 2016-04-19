
var React = require('react');
var ReactDOM = require('react-dom');

var ImageContainer = require('./image-container');

var images = {
  images: [
    "https://cdn.auth0.com/blog/react-js/react.png"
  ]
};

var App = React.createClass({
  render: function() {

    var images = this.props.images.map(function(image){
      return <ImageContainer imageSource={image}/>
    });

    return <div className="container">
      <div className="row panel panel-default">
        <div className="panel-heading">
        </div>
        <div className="col-md-8 col-md-offset-2">
          <h2 classname="text-center">
            react-boiler
          </h2>
          <p className="lead">
            You have made it, you now have things set up.
          </p>
          <p>
            Visit <a href="https://github.com/michaelbarnes/react-boiler">the repo</a> for more info or if there are any question please contact me on barnesmike@outlook.com
          </p>
        </div>
        <div className="row">{images}</div>
      </div>
    </div>
  }
});

var element = React.createElement(App, images);
ReactDOM.render(element, document.querySelector('.container'));
