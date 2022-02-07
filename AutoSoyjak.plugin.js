/**
 * @name AutoSoyjak
 * @author DiOnFire
 * @description Automatically adds a random soyjak picture to your message
 * @version 1.0
 * @source https://github.com/DiOnFire/AutoSoyjak
 */

module.exports = class AutoSoyjak {
    load() {}

    start() {
        setInterval(function() {
            var text = document.querySelector("span[data-slate-string]");
            if (text != null || text != undefined) {
                var textTyped = document.querySelector("span[data-slate-string]").textContent
                if (textTyped.endsWith("#soyjak")) {
                    let NewMessage = textTyped;
                    NewMessage = NewMessage.replace("#soyjak", "https://booru.soyjak.su/random_image/download?" + Math.floor(Math.random() * 60000))
                    document.querySelector("span[data-slate-string]").textContent = NewMessage
                }
            }
        }, 300);
    }

    stop() {}
}