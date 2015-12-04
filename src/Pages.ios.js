var React = require('react-native');
var I18n = require('./I18n');
var Page = require('./Page');

var {
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight
} = React;

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.navigator.push({
            name: this.props.route,
            title: I18n.t('route_'+this.props.route)
          });
        }}>
        <Text style={styles.textNav}>{I18n.t('route_'+this.props.route)}</Text>
      </TouchableHighlight>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight onPress={() => {
          if(index > 0) {
            navigator.pop();
          }
        }}>
          <Text style={ styles.textNav }>Back</Text>
        </TouchableHighlight>
      );
    }

    return null;
  },
  RightButton: function(route, navigator, index, navState) {
    if(route.name === 'users') {
      return (<NavButton route='rank' navigator={navigator} />)
    } else if(route.name === 'rank') {
      return (<NavButton route='rank_by_class' navigator={navigator} />)
    } else if(route.name === 'rank_by_class') {
      return (<NavButton route='rank_daily_fight' navigator={navigator} />)
    } else if(route.name === 'chat') {
      return (<NavButton route='guestbook' navigator={navigator} />)
    }

    return null;
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={ styles.textNav }>{route.title}</Text>
    );
  },
};

var Pages = React.createClass({
  reload: function(route) {
    if(this.refs.nav.refs.page) {
      this.refs.nav.refs.page.reload(route);
    }
  },
  render: function() {
    return (
      <Navigator ref='nav'
        initialRoute={{
          name: this.props.route,
          title: I18n.t('route_'+this.props.route)
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
        renderScene={(route, navigator) => {
          return (<Page ref='page' route={route.name} />)
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  textNav: {
    color: '#AAAAAA',
    paddingLeft: 20,
    paddingRight: 20
  }
});


module.exports = Pages
