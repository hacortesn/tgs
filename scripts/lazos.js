function triggerTo(component, chart, value) {
    window["chart-" + chart].load({columns: [['data', value]]});

    if (items.hasOwnProperty(component)) {
        var pojo = items[component];
        var triggerTo = pojo.triggerTo;

        for (var j in triggerTo) {
            console.log(whoIsSliding);
            if (triggerTo[j].to != whoIsSliding) {
                var s = "slider-" + triggerTo[j].to;
                var direct = triggerTo[j].direct;
                var x = 0;
                if (direct === false)
                    value = x = 100 - value;

                $(window[s]).trigger("event-" + chart, [chart, value]);
            }
        }
    }
}


var items = {
    "H": {
        "listenTo": ["J", "S"],
        "triggerTo": [{"to": "Q", "direct": true}, {"to": "O", "direct": false}]
    },
    "Q": {
        listenTo: ["H"],
        "triggerTo": [{"to": "J", "direct": true}]
    },
    "J": {
        listenTo: ["Q"],
        "triggerTo": [{"to": "H", "direct": true}]
    },
    "B": {
        listenTo: ["I"],
        "triggerTo": [{"to": "A", "direct": true}]
    },

    "A": {
        listenTo: ["B"],
        "triggerTo": [{"to": "C", "direct": false}]
    },

    "C": {
        listenTo: ["A", "D", "K"],
        "triggerTo": [{"to": "I", "direct": true}, {"to": "G", "direct": true}]
    },
    "I": {
        listenTo: ["C"],
        "triggerTo": [{"to": "B", "direct": false}]
    },

    "G": {
        listenTo: ["C"],
        "triggerTo": [{"to": "D", "direct": false}, {"to": "NH", "direct": false}]
    },
    "D": {
        listenTo: ["G"],
        "triggerTo": [{"to": "C", "direct": false}]
    },
    "NH": {
        listenTo: ["G"],
        "triggerTo": [{"to": "K", "direct": false}]
    },
    "K": {
        listenTo: ["NH"],
        "triggerTo": [{"to": "C", "direct": false}]
    },
    "F": {
        listenTo: ["S", "L"],
        "triggerTo": [{"to": "M", "direct": true}]
    },
    "M": {
        listenTo: ["F"],
        "triggerTo": [{"to": "S", "direct": false}]
    },
    "S": {
        listenTo: ["M"],
        "triggerTo": [{"to": "F", "direct": true}, {"to": "H", "direct": true}]
    },
    "L": {
        listenTo: ["0"],
        "triggerTo": [{"to": "F", "direct": false}]
    },
    "O": {
        listenTo: ["H"],
        "triggerTo": [{"to": "L", "direct": false}]
    },


};