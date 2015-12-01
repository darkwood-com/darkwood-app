var React = require('react-native');
var I18n = require('./I18n');

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
        url={ I18n.t('route_' + this.props.route + '_url') }
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
