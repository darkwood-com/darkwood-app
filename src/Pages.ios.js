var React = require('react-native');
var I18n = require('react-native-i18n');
var Page = require('./Page');

var {
  StyleSheet,
  Navigator,
  Text
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.title} [{index}]
      </Text>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text>
        {route.title} [{index}]
      </Text>
    );
  },
};

var Pages = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{name: this.props.route, index: 0}}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
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
