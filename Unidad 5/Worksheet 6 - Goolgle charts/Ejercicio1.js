/* 
    Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:
    a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).    
    b) Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.
*/

// Grafico barras
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(dibujarBarras);

// Grafico sectores
google.charts.setOnLoadCallback(dibujarSectores);

// Grafico paises
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(dibujarPaises);

function dibujarBarras() {
 var data = google.visualization.arrayToDataTable([
         ['Partidos', 'Escanos', { role: 'style' }],
         ['PSOE', 120, 'red'],           
         ['PP', 89, 'blue'],           
         ['Vox', 52, 'green'],
         ['UO', 35, 'purple'],
         ['ERC', 13, 'yellow'],
         ['CS', 10, 'orange'],
         ['Otros', 41, 'grey'],
      ]);
      var options = {
        title: 'Representación partidos políticos',
         legend: { position: 'none' },
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Partidos',
          minValue: 0
        },
        vAxis: {
          title: 'Escaños'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('divBarras'));
      chart.draw(data, options);
    }

function dibujarSectores() {
    var data = google.visualization.arrayToDataTable([
        ['Partidos', 'Escanos', { role: 'style' }],
        ['PSOE', 120, 'red'],           
        ['PP', 89, 'blue'],           
        ['Vox', 52, 'green'],
        ['UO', 35, 'purple'],
        ['ERC', 13, 'yellow'],
        ['CS', 10, 'orange'],
        ['Otros', 41, 'grey'],
     ]);

    var options = {
      title: 'My Daily Activities',
      is3D: true,
    };
    var chart = new google.visualization.PieChart(document.getElementById('divSectores'));
    chart.draw(data, options);
  }

  function dibujarPaises() {
    var data = google.visualization.arrayToDataTable([
      ['Paises', 'Visitantes'],
      ['France', 89],
      ['Spain', 89],
      ['United States', 80],
      ['China', 63],
      ['Italy', 62],
      ['Turkey', 46],
      ['Mexico', 41],
      ['Germany', 39],
      ['Thailand', 38],
      ['United Kingdom', 36],
    ]);

    var options = {

    };

    var chart = new google.visualization.GeoChart(document.getElementById('divPaises'));

    chart.draw(data, options);
  }