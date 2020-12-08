/* 
    Realiza una animación sobre uno de los gráficos del punto 1a. Para ello suponemos que pasados 10 segundos cambian los datos y debe animarse automáticamente.
*/

// Grafico barras
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(dibujarBarras);

function dibujarBarras() {
    var datosPrimeros = google.visualization.arrayToDataTable([
            ['Partidos', 'Escanos', { role: 'style' }],
            ['PSOE', 120, 'red'],           
            ['PP', 89, 'blue'],           
            ['Vox', 52, 'green'],
            ['UP', 35, 'purple'],
            ['ERC', 13, 'yellow'],
            ['CS', 10, 'orange'],
            ['Otros', 41, 'grey'],
         ]);

         var datosSegundos = google.visualization.arrayToDataTable([
            ['Partidos', 'Escanos', { role: 'style' }],
            ['PSOE', 123, 'red'],           
            ['PP', 66, 'blue'],           
            ['Vox', 24, 'green'],
            ['UP', 33, 'purple'],
            ['ERC', 15, 'yellow'],
            ['CS', 57, 'orange'],
            ['Otros', 35, 'grey'],
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
             title: 'Escaños',
           },
           animation: {
               duration: '2000',
               easing: 'out',
               startup: true,
           }
         };
         var chart = new google.visualization.BarChart(document.getElementById('divBarras'));
         chart.draw(datosPrimeros, options);

         window.setInterval(()=>{
            chart.draw(datosSegundos, options);
         },10000)
       }