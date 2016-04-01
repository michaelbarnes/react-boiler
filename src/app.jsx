
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return <div className="row panel panel-default">
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
          Visit <a href="">the repo</a> for more info or if there are any question please contact me on barnesmike@outlook.com
        </p>
      </div>
      <div class="col-md-4">.
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
