var chartData = {
    labels: ['Exception 1 ', 'Exception 2'],
    datasets: [{
        fill: true,
        backgroundColor: ['red', 'green'],
        data: [5, 95],
        // Notice the borderColor
        borderColor: ['black', 'black'],
        borderWidth: [2, 2]
    }]
}
var options = {
    title: {
        display: true,
        text: 'Exceptions By Type'

    }

}

function myFunction() {
    console.log('Page is loaded')
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js'
    script.id = 'chartLibrary'
    head.appendChild(script)

    var canvas = document.getElementById('chartCanvas')
    var ctx = canvas.getContext('2d')

    var myChartLib = document.querySelector('#chartLibrary')
    myChartLib.addEventListener('load', function() {
        // Chart declaration:
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: chartData,
            options: options
        })
    })


}
