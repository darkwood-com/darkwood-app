var React = require('react-native');
var I18n = require('react-native-i18n');

var {
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} = React;

var Page = React.createClass({
  render: function() {
    return (
      <WebView
        url='http://www.google.fr'
        />
    );
  }
});

var styles = StyleSheet.create({
  text: {
    flex: 1
  }
});

module.exports = Page
