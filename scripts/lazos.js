function triggerTo(component, chart, value) {
    window["chart-" + chart].load({columns: [['data', value]]});

    if (items.hasOwnProperty(component)) {
        var pojo = items[component];
        var triggerTo = pojo.triggerTo;
        var whoTriggers = [];

        for (var j in triggerTo) {
            //console.log(whoIsSliding);

            if (triggerTo[j].to != whoIsSliding) {

                console.log("s " + whoIsSliding + " | " + component + " -> " + triggerTo[j].to)
                var s = "slider-" + triggerTo[j].to;
                var direct = triggerTo[j].direct;
                var x = 0;
                if (direct === false)
                    value = x = 100 - value;
                if (triggerTo[j].to == "F") {
                    switch (whoIsSliding) {
                        case "O":
                        case "L":
                        case "C":
                        case "H":
                            whoIsSliding = "F";
                            console.log("llwgó acá?? FFFF")
                            break;

                    }
                } else if (triggerTo[j].to == "C") {
                    switch (whoIsSliding) {
                        case "K":
                        case "D":
                            whoIsSliding = "C";
                            console.log("llwgó acá?? CCCC")
                            break;
                    }
                } else if(triggerTo[j].to == "H") {
                    switch (whoIsSliding) {
                        case "F":
                        //case "D":
                            whoIsSliding = "H";
                            console.log("llwgó acá?? CCCC")
                            break;
                    }
                }
                console.log("$(window[" + s + "]).trigger(event-" + chart + ", [" + chart + "," + value + "])");
                $(window[s]).trigger("event-" + chart, [chart, value])


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
        listenTo: ["H", "O"],
        "triggerTo": [{"to": "J", "direct": true}]
    },
    "J": {
        listenTo: ["Q"],
        "triggerTo": [{"to": "H", "direct": true}]
    },
    "B": {
        listenTo: ["I"],
        "triggerTo": [{"to": "A", "direct": true}, {"to": "O", "direct": true}]
    },

    "A": {
        listenTo: ["B", "K"],
        "triggerTo": [/*{"to": "C", "direct": false}*/]
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
        "triggerTo": [{"to": "K", "direct": false}, {"to": "S", "direct": false}]
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
        listenTo: ["NH", "M"],
        "triggerTo": [{"to": "F", "direct": true}, {"to": "H", "direct": true}]
    },
    "L": {
        listenTo: ["O"],
        "triggerTo": [{"to": "F", "direct": false}]
    },
    "O": {
        listenTo: ["H", "B"],
        "triggerTo": [{"to": "L", "direct": false}, {"to": "Q", "direct": false}]
    },


};