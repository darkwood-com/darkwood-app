var I18n = require('react-native-i18n');

I18n.fallbacks = true;
I18n.translations = {
    fr: {
        tap_play: "Jouer",
        tap_say: "Chat",
        tap_users: "Joueurs",
        tap_account: "Compte",
        route_play: "Jouer",
        route_say: "Chat",
        route_users: "Joueurs",
        route_account: "Compte"
    },
    en: {
        tap_play: "Play",
        tap_say: "Chat",
        tap_users: "Players",
        tap_account: "Account",
        route_play: "Play",
        route_say: "Chat",
        route_users: "Players",
        route_account: "Account"
    },
    de: {
        tap_play: "Spiele",
        tap_say: "Chat",
        tap_users: "Spieler",
        tap_account: "Konto",
        route_play: "Spiele",
        route_say: "Chat",
        route_users: "Spieler",
        route_account: "Konto"
    }
};

module.exports = I18n
