// Chart parameters

var idlingCount = 0
var speedingCount =0

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

// To populate canvas with chart 
function LoadChart() {
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

// To fetch exception events
async function GetExceptions(_fromDate,_toDate,_deviceId,_ruleId){
    

return new Promise((resolve,reject)=>{
    
api.call("Get", {
    "typeName": "ExceptionEvent",
    "search":{
        fromDate:_fromDate,
        toDate:_toDate,
        deviceSearch:{
            id:_deviceId
        },
        
            ruleSearch:{
                id:_ruleId
            }
         
    },
}, function(result) {
    if(_ruleId==="RuleIdlingId"){
        idlingCount=result.length
        resolve(idlingCount)
    }
    else{
        if(_ruleId==="RulePostedSpeedingId"){
            speedingCount=result.length
            resolve(speedingCount)
        }
    }
    return result.length
}, function(e) {
    resolve(0)
});
})

};
