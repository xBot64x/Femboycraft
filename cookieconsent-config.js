import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud inline",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            cs: {
                consentModal: {
                    title: "Máš chuť na sušenku?",
                    description: "Náš web využívá soubory cookies pro správné fungování webu a pro analýzu návštěvnosti.",
                    closeIconLabel: "",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    showPreferencesBtn: "Upravit preference",
                    footer: "<a href=\"zpracovaniudaju.php\">Ochrana osobních údajů</a>"
                },
                preferencesModal: {
                    title: "Možnosti cookies",
                    closeIconLabel: "Zavřít",
                    acceptAllBtn: "Přijmout vše",
                    acceptNecessaryBtn: "Odmítnout vše",
                    savePreferencesBtn: "Uložit výběr",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Využití souborů cookies",
                            description: "Soubory cookies využíváme pro správné fungování webu a pro analýzu návštěvnosti."
                        },
                        {
                            title: "Nezbytné soubory cookies <span class=\"pm__badge\">Vždy povolené</span>",
                            description: "Tyto povinné soubory cookies zajišťují správné fungování webu",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytické cookies",
                            description: "Díky těmto cookies zapomocí google analytics víme jak máme upravit naši stránku k lepšímu a získat další důležité informace o návševnosti.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Více informací",
                            description: "Pro jakékoli dotazy ohledně souborů cookies a nebo jiné dotazy mě <a class=\"cc__link\" href=\"kontakt.php\">kontaktujte</a>."
                        }
                    ]
                }
            }
        }
    }
});