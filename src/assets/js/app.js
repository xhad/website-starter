
// language object is imported within index.html

var App = {
    language: english,
    components: {
        about: function(language) {
            Tools.domWrite('about-title', language.about.title);
            Tools.domWrite('about-text', language.about.text);
        }
    }
}

var Tools = {

    init: function() {
        App.components.about(App.language);
    },
    // replaces id tag inner html with content
    domWrite: function(element, content) {
        window.document.getElementById(element).innerHTML = content
    },
    setLang: function(language) {
        switch (language) {
            case "english":
                App.language = english;
                Tools.init();
                break;
            case "korean":
                App.language = korean;
                Tools.init();
                break;
            default:
                return;
        }
    }
}


Tools.init();


