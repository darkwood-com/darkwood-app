var React = require('react-native');
var I18n = require('./I18n');
var Page = require('./Page');

var {
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight onPress={() => {
          if(index > 0) {
            navigator.pop();
          }
        }}>
          <Text>Back</Text>
        </TouchableHighlight>
      );
    }

    return null;
  },
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text>{route.title}</Text>
    );
  },
};

var Pages = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{
          name: this.props.route,
          title: I18n.t('route_account'),
          index: 0
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
        renderScene={(route, navigator) =>
          <Page
            route={route.name}
          />
        }
      />
    );
  }
});

module.exports = Pages
