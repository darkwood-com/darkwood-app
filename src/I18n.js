var I18n = require('react-native-i18n');
var Device = require('react-native-device');

var baseUrl = 'http://www.darkwood.dev/app_dev.php';
//var baseUrl = 'http://www.darkwood.fr';
var display = 'iphone';
if(Device.isIpad()) {
  display = 'ipad';
}
var
  baseUrlFR = baseUrl + '/jouer/'+display,
  baseUrlEN = baseUrl + '/en/play/'+display,
  baseUrlDE = baseUrl + '/de/spiel/'+display;

I18n.fallbacks = true;
I18n.translations = {
    fr: {
        tap_play: "Jouer",
        tap_chat: "Chat",
        tap_users: "Joueurs",
        tap_account: "Compte",
        route_play: "Jouer",
        route_play_url: baseUrlFR + "?state=play",
        route_chat: "Chat",
        route_chat_url: baseUrlFR + "?state=chat",
        route_guestbook: "Livre d'or",
        route_guestbook_url: baseUrlFR + "?state=guestbook",
        route_users: "Joueurs",
        route_users_url: baseUrlFR + "?state=users",
        route_rank: "Général",
        route_rank_url: baseUrlFR + "?state=rank",
        route_rank_by_class: "Par classe",
        route_rank_by_class_url: baseUrlFR + "?state=rank&mode=by_class_human",
        route_rank_daily_fight: "Combat du jour",
        route_rank_daily_fight_url: baseUrlFR + "?state=rank&mode=daily_fight_by_defeats",
        route_account: "Compte",
        route_account_url: baseUrlFR + "?state=login",
        back: "Retour",
    },
    en: {
        tap_play: "Play",
        tap_chat: "Chat",
        tap_users: "Players",
        tap_account: "Account",
        route_play: "Play",
        route_play_url: baseUrlEN + "?state=play",
        route_chat: "Chat",
        route_chat_url: baseUrlEN + "?state=chat",
        route_guestbook: "Guestbook",
        route_guestbook_url: baseUrlEN + "?state=guestbook",
        route_users: "Players",
        route_users_url: baseUrlEN + "?state=users",
        route_rank: "General",
        route_rank_url: baseUrlEN + "?state=rank",
        route_rank_by_class: "By Class",
        route_rank_by_class_url: baseUrlEN + "?state=rank&mode=by_class_human",
        route_rank_daily_fight: "Daily battle",
        route_rank_daily_fight_url: baseUrlEN + "?state=rank&mode=daily_fight_by_defeats",
        route_account: "Account",
        route_account_url: baseUrlEN + "?state=login",
        back: "Back",
    },
    de: {
        tap_play: "Spiele",
        tap_chat: "Chat",
        tap_users: "Spieler",
        tap_account: "Konto",
        route_play: "Spiele",
        route_play_url: baseUrlDE + "?state=play",
        route_chat: "Chat",
        route_chat_url: baseUrlDE + "?state=chat",
        route_guestbook: "Gästebuch",
        route_guestbook_url: baseUrlDE + "?state=guestbook",
        route_users: "Spieler",
        route_users_url: baseUrlDE + "?state=users",
        route_rank: "Gesamtrangliste",
        route_rank_url: baseUrlDE + "?state=rank",
        route_rank_by_class: "Zum klasse Spieler",
        route_rank_by_class_url: baseUrlDE + "?state=rank&mode=by_class_human",
        route_rank_daily_fight: "Kampf des Tages",
        route_rank_daily_fight_url: baseUrlDE + "?state=rank&mode=daily_fight_by_defeats",
        route_account: "Konto",
        route_account_url: baseUrlDE + "?state=login",
        back: "Zurück",
    }
};

module.exports = I18n
