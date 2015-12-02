var React = require('react-native');
var I18n = require('./I18n');

var {
  StyleSheet,
  Text,
  View,
  Image,
  WebView,
  ActivityIndicatorIOS
} = React;

var Page = React.createClass({
  getInitialState: function() {
    return {
      url: this.props.route
    };
  },
  render: function() {
    return (
      <WebView
        ref='webview'
        style={ styles.webview }
        url={ I18n.t('route_' + this.state.url + '_url') }
        startInLoadingState={true}
        renderLoading={ () => {
          return (
            <View style={ styles.loadingView }>
              <ActivityIndicatorIOS
                size='large'
                />
            </View>
          )
        }}
        onNavigationStateChange={(e) => {
          console.log(e)
        }}
        />
    );
  },
  reload: function() {
    this.refs.webview.reload();
  }
});

var styles = StyleSheet.create({
  webview: {
    marginTop: 50,
    backgroundColor: "#000000"
  },
  loadingView: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = Page
