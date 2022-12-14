'use strict';
$(document).ready(function () {
    var chart = AmCharts.makeChart("rekammedis-map", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "title": "Sales",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function (value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "title": "Data Rekam Medis",
            "gridAlpha": 0,
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#448aff",
            "type": "smoothedLine",
            "title": "Jam Aktif",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#536dfe",
            "type": "smoothedLine",
            "title": "Seluruh Jam Aktif",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "market1": 85,
            "market2": 75
        }, {
            "date": "2013-01-17",
            "market1": 74,
            "market2": 80
        }, {
            "date": "2013-01-18",
            "market1": 78,
            "market2": 88
        }, {
            "date": "2013-01-19",
            "market1": 85,
            "market2": 75
        }, {
            "date": "2013-01-20",
            "market1": 82,
            "market2": 89
        }, {
            "date": "2013-01-21",
            "market1": 83,
            "market2": 78
        }, {
            "date": "2013-01-22",
            "market1": 72,
            "market2": 92
        }, {
            "date": "2013-01-23",
            "market1": 85,
            "market2": 76
        }]
    });
    var map;
    map = new GMaps({
        el: '#markers-map',
        lat: 21.2334329,
        lng: 72.866472,
        scrollwheel: false
    });
    map.addMarker({
        lat: 21.2334329,
        lng: 72.866472,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p><Phoenicoded></Phoenicoded> <br/> Buy Now at <a href="">Themeforest</a></p>'
        }
    });
    floatchart()
    $(window).on('resize', function () {
        floatchart();
    });
    $('#mobile-collapse').on('click', function () {
        setTimeout(function () {
            floatchart();
        }, 700);
    });
});

function floatchart() {
    $(function () {
        var options = {
            legend: {
                show: false
            },
            series: {
                label: "",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
        $.plot($("#tot-lead"), [{
            data: [
                [0, 25],
                [1, 15],
                [2, 20],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 10],
                [7, 26],
                [8, 20],
                [9, 10],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 26],
            ],
            color: "#448aff",
            lines: {
                show: true,
                fill: true,
                lineWidth: 3
            },
            points: {
                show: false,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#tot-vendor"), [{
            data: [
                [0, 25],
                [1, 15],
                [2, 25],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 26],
                [8, 20],
                [9, 13],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 20],
            ],
            color: "#11c15b",
            lines: {
                show: true,
                fill: true,
                lineWidth: 3
            },
            points: {
                show: false,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#invoice-gen"), [{
            data: [
                [0, 25],
                [1, 30],
                [2, 25],
                [3, 27],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 26],
                [8, 10],
                [9, 13],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 27],
            ],
            color: "#ff5252",
            lines: {
                show: true,
                fill: true,
                lineWidth: 3
            },
            points: {
                show: false,
            },
            curvedLines: {
                apply: false,
            }
        }], options);
    });
}
