var I18n = require('react-native-i18n');
var baseurl = 'http://www.darkwood.dev/app_dev.php';

I18n.fallbacks = true;
I18n.translations = {
    fr: {
        tap_play: "Jouer",
        tap_say: "Chat",
        tap_users: "Joueurs",
        tap_account: "Compte",
        route_play: "Jouer",
        route_play_url: baseurl + "/jouer/iphone?state=play",
        route_say: "Chat",
        route_say_url: baseurl + "/jouer/iphone?state=chat",
        route_users: "Joueurs",
        route_users_url: baseurl + "/jouer/iphone?state=users",
        route_account: "Compte",
        route_account_url: baseurl + "/jouer/iphone?state=login",
    },
    en: {
        tap_play: "Play",
        tap_say: "Chat",
        tap_users: "Players",
        tap_account: "Account",
        route_play: "Play",
        route_play_url: baseurl + "/en/play/iphone?state=play",
        route_say: "Chat",
        route_say_url: baseurl + "/en/play/iphone?state=chat",
        route_users: "Players",
        route_users_url: baseurl + "/en/play/iphone?state=users",
        route_account: "Account",
        route_account_url: baseurl + "/en/play/iphone?state=login",
    },
    de: {
        tap_play: "Spiele",
        tap_say: "Chat",
        tap_users: "Spieler",
        tap_account: "Konto",
        route_play: "Spiele",
        route_play_url: baseurl + "/de/spiel/iphone?state=play",
        route_say: "Chat",
        route_say_url: baseurl + "/de/spiel/iphone?state=chat",
        route_users: "Spieler",
        route_users_url: baseurl + "/de/spiel/iphone?state=users",
        route_account: "Konto",
        route_account_url: baseurl + "/de/spiel/iphone?state=login",
    }
};

module.exports = I18n
