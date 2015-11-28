var React = require('react-native');
var I18n = require('react-native-i18n');

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
            <View style={ styles.pageView }>
              <Text>Play</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_say") }
            icon={ require('image!say') }
            onPress={ () => this.changeTab('say') }
            selected={ this.state.selectedTab === 'say' }>
            <View style={ styles.pageView }>
              <Text>Say</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_users") }
            icon={ require('image!users') }
            onPress={ () => this.changeTab('users') }
            selected={ this.state.selectedTab === 'users' }>
            <View style={ styles.pageView }>
              <Text>Users</Text>
            </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={ I18n.t("tap_account") }
            icon={ require('image!account') }
            onPress={ () => this.changeTab('account') }
            selected={ this.state.selectedTab === 'account' }>
            <Pages />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#ffffff',
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

I18n.fallbacks = true;

I18n.translations = {
    fr: {
        tap_play: "Jouer",
        tap_say: "Chat",
        tap_users: "Joueurs",
        tap_account: "Compte"
    },
    en: {
        tap_play: "Play",
        tap_say: "Chat",
        tap_users: "Players",
        tap_account: "Account"
    },
    de: {
        tap_play: "Spiele",
        tap_say: "Chat",
        tap_users: "Spieler",
        tap_account: "Konto"
    }
}

module.exports = Main
