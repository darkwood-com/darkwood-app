var React = require('react-native');
var I18n = require('react-native-i18n');
var Page = require('./Page');

var {
  StyleSheet,
  Navigator
} = React;

var Pages = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <Page
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
});

module.exports = Pages
