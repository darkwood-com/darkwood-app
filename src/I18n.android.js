var baseUrl = 'http://www.darkwood.fr';
var baseUrlFR = baseUrl + '/jouer/iphone';

var I18n = {
    t: function(key) {
        var fr = {
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
        };

        return fr[key];
    }
};

module.exports = I18n
