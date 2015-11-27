var whoIsSliding = "";

var items = {
    "H": {
        "listenTo": ["J"],
        "triggerTo": ["Q"]
    },
    "Q": {
        listenTo: ["H"],
        "triggerTo": ["J"]
    },
    "J": {
        listenTo: ["Q"],
        "triggerTo": ["H"]
    }
};


$(".slider").each(function (i, e) {
    var id = $(e).attr("id");

    var component = $(e).attr("data-component");

    window[id] = $("#" + id).slider({reverse: true, "triggerChangeEvent": true})
        .on("slide", function (e) {
            var chart = $(e.target).attr("data-component");
            var value = e.value;
            whoIsSliding = chart;

            /*for (var x in init) {
             var component = "slider-" + init[x];
             if (component != id)
             window[component].setValue(value)
             console.log("c " + component + "; id" + id)

             }*/

            window["chart-" + chart].load({columns: [['data', value]]});

            if (items.hasOwnProperty(component)) {
                var triggerTo = pojo.triggerTo;

                for (var j in triggerTo) {

                    if (triggerTo[j] != whoIsSliding) {
                        $(window["slider-" + triggerTo[j]]).trigger("event-" + chart, [chart, value]);
                    }
                }
            }


            //var value = sliderH.getValue();
            //console.log("id = " + id);
            //window["chart-" + chart].load({columns: [['data', value]]});


            //modificar(chart, value);

        })
        .on("change", function (e, o, n) {

            console.log("hhhhhh", e.value.newValue, n)
            console.log("cambiando " + component + " new = " + this.getValue())
            //window["chart-" + component].load({columns: [['data', value]]});
        })
        .data('slider');


    if (items.hasOwnProperty(component)) {
        var pojo = items[component];
        var listenTos = pojo.listenTo;

        for (var j in listenTos) {
            var listenTo = listenTos[j];
            console.log(component + " listens event-" + listenTo)
            $(window["slider-" + component]).on("event-" + listenTo, function (e, from, value) {

                console.log("me ", component, "from = ", from, "value", value, " who" + whoIsSliding);
                window["slider-" + component].setValue(value, true, true);

            });
            /*$(window[id]).on("eventico", function (e, from, value) {
             console.log(from, value, whoIsSliding)
             });*/
        }
    }

    /*$(window[id]).on("eventico", function (e, from, value) {
     console.log(from, value, whoIsSliding)
     });*/

});


/*var span2 = $(".span2").slider().on("slide", function (e){
 var value  = span2.getValue();
 chart.load({columns: [['data', value]]});
 }).data('slider');*/


var total = 1;


$(".chart").each(function (i, e) {
    var chart = $(e).attr("id")
    window[chart] = c3.generate({
        bindto: "#" + chart,
        data: {
            columns: [
                ['data', 50]
            ],
            type: 'gauge',
            /*onclick: function (d, i) {
             console.log("onclick", d, i);
             },
             onmouseover: function (d, i) {
             console.log("onmouseover", d, i);
             },
             onmouseout: function (d, i) {
             console.log("onmouseout", d, i);
             },
             onmouseclick: function (d, i) {
             console.log("click ", "-" + d + "-", i);
             }*/

        },
        gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044', '#60B044', '#F6C600', '#F97600', '#FF0000',], // the three color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [25, 36, 40, 45, 56, 60, 64, 75]
            }
        },
        size: {
            height: 180
        }
    });
});


/*const LAZO_JHQJ = [{
 "from": "j",
 "to": "h",
 function
 }];*/


var modificar = function (id, value) {
    if (laces1.indexOf(id) != -1)
        cliclo1(id, value)
};

