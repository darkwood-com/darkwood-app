/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View,
    ToolbarAndroid
} from 'react-native';
var I18n = require('./I18n');
var Pages = require('./Pages');

var Main = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'account'
        }
    },
    changeTab(tabName) {
        if (this.refs[tabName]) {
            this.refs[tabName].reload(tabName);
        }

        this.setState({
            selectedTab: tabName
        });
    },
    render() {
        return (
            <View style={ styles.pageView }>
                <View style={ styles.headerView }>
                    <Image
                        style={ styles.image }
                        source={ require('./img/header.png') }
                    />
                </View>
                {(() => {
                    switch (this.state.selectedTab) {
                        case 'play': return (<Pages ref='play' route="play" />);
                        case 'chat': return (<Pages ref='chat' route="chat" />);
                        case 'users': return (<Pages ref='users' route="users" />);
                        case 'account': return (<Pages ref='account' route="account" />);
                    }
                })()}
                <ToolbarAndroid
                    actions={[{
                        title: I18n.t("tap_play"),
                        icon: require('./img/play.png'),
                        show: 'always'
                        }, {
                        title: I18n.t("tap_chat"),
                        icon: require('./img/say.png'),
                        show: 'always'
                        }, {
                        title: I18n.t("tap_users"),
                        icon: require('./img/users.png'),
                        show: 'always'
                        }, {
                        title: I18n.t("tap_account"),
                        icon: require('./img/account.png'),
                        show: 'always'
                        }]}
                    onActionSelected={ (index) => {
                        if(index == 0) {
                            this.changeTab('play')
                        } else if(index == 1) {
                            this.changeTab('chat')
                        } else if(index == 2) {
                            this.changeTab('users')
                        } else if(index == 3) {
                            this.changeTab('account')
                        }
                    } }
                    style={styles.toolbar}
                />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    pageView: {
        backgroundColor: '#000000',
        flex: 1
    },
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    headerView: {
        flexDirection: 'column',
        height: 80,
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
});

export { Main }
