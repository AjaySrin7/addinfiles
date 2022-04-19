

// To process submit button click

function GenerateChart(api,_fromDate,_toDate){
GetExceptions(api,_fromDate,_toDate,"bB","RuleIdlingId")
.then(res=>{
    console.log(res)
    GetExceptions(api,_fromDate,_toDate,"bB","RulePostedSpeedingId")
    .then(res=>{
        console.log(res)
        LoadChart()
    })
})
     
}


// To populate canvas with chart 
function LoadChart() {
    console.log('Page is loaded')
    var chartData = {
    labels: ['Idling', 'Speeding'],
    datasets: [{
        fill: true,
        backgroundColor: ['red', 'green'],
        data: [idlingCount, speedingCount],       
        borderColor: ['black', 'black'],
        borderWidth: [2, 2]
    }]
}
    console.log('cd',chartData)
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


