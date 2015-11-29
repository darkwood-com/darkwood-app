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
      <WebView style={ styles.webview }
        url='http://www.darkwood.dev/app_dev.php/jouer/iphone?state=login'
        />
    );
  }
});

var styles = StyleSheet.create({
  webview: {
    marginTop: 80
  }
});

module.exports = Page
