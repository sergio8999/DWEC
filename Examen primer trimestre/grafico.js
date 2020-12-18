google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Año", "Poblacion", { role: "style" } ],
        ["2017", 14252, "green"],
        ["2018", 23360, "green"],
        ["2019", 40241, "green"],
        ["2020", 43500, "green"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation",
                        },
                       2]);

      var options = {
        title: "Evolucionde la población de Nvalcarnero",
        width: 700,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        backgroundColor:"blue",
        animation: {
            duration: '5000',
            easing: 'out',
            startup: true,
        }
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("divGrafico"));
      chart.draw(view, options);
  }