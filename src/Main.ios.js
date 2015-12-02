var React = require('react-native');
var I18n = require('./I18n');

var Pages = require('./Pages');

var {
  StyleSheet,
  Text,
  Image,
  View,
  TabBarIOS,
  StatusBarIOS
} = React;

var Main = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'account'
    }
  },
  changeTab(tabName) {
    if(this.refs[tabName]) {
      this.refs[tabName].reload();
    }

    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      <View style={ styles.pageView }>
        <View style={ styles.headerView }>
          <Image
            style={ styles.image }
            source={ require('image!header') }
            />
        </View>
        <TabBarIOS style={ styles.pageView }>
          <TabBarIOS.Item
            title={ I18n.t("tap_play") }
            icon={ require('image!play') }
            onPress={ () => this.changeTab('play') }
            selected={ this.state.selectedTab === 'play' }>
            <Pages ref='play' route="play" />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_say") }
            icon={ require('image!say') }
            onPress={ () => this.changeTab('say') }
            selected={ this.state.selectedTab === 'say' }>
            <Pages ref='say' route="say" />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_users") }
            icon={ require('image!users') }
            onPress={ () => this.changeTab('users') }
            selected={ this.state.selectedTab === 'users' }>
            <Pages ref='users' route="users" />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_account") }
            icon={ require('image!account') }
            onPress={ () => this.changeTab('account') }
            selected={ this.state.selectedTab === 'account' }>
            <Pages ref='account' route="account" />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#000000',
    flex: 1
  },
  headerView: {
    flexDirection: 'column',
    height: 80,
    alignItems: 'center'
  },
  image: {
    flex:1,
    resizeMode: 'contain'
  }
});

module.exports = Main
