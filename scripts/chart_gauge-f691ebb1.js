var init = ["J", "Q", "H"]
$(".slider").each(function (i, e) {
    var id = $(e).attr("id");

    window[id] = $("#" + id).slider({
        reversed: true
    }).on("slide", function (e) {
        var chart = $(e.target).attr("data-component");
        var value = e.value;

        for (var x in init) {
            var component = "slider-" + init[x];
            if (component != id)
                window[component].setValue(value)
            console.log("c " + component + "; id" + id)

        }


        //var value = sliderH.getValue();
        console.log("id = " + chart);
        //window["chart-" + chart].load({columns: [['data', value]]});

        modificar(chart, value);
    }).data('slider');

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
            onclick: function (d, i) {
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
            }

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
    console.log("ddd" + id);
    switch (id) {
        case "J":
            window["chart-H"].load({columns: [['data', value]]});
            window["chart-Q"].load({columns: [['data', 100- value]]});
            break;


    }


}

