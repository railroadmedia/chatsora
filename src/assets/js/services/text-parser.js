import EmojiData from '../data/emoji.json';

let emoticons = {
}

for (let group in EmojiData) {
    EmojiData[group].forEach(item => {
        emoticons[`:${item.id}:`] = item.class;
    });
}

let patterns = [];

let metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (let i in emoticons) {
    if (emoticons[i]){
        patterns.push('('+i.replace(metachars, "\\$&")+')');
    }
}

export default {

    /**
     * Parses message text and replaces emoji codes with font awesome icons and urls with anchors
     *
     * @param String userId
     *
     * @returns String
     */
    parseEmoji(text) {
        return text.replace(
            new RegExp(patterns.join('|'),'g'),
            function (match) {
                return typeof emoticons[match] != 'undefined' ?
                    `<i class="${emoticons[match]}" title="${match}"></i>` : match;
            }
        );
    },

    parseUrls(text) {
        return text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z09+&@#/%=~_|])/img, '<a href="$1">$1</a>');
    }
}
