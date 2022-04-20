
      // Declaring global variables
      var idlingCount = 0
      var speedingCount = 0
      var options={}

      geotab.addin.myaddin = () => {
        return {
          initialize (api, state, callback) {
            console.log('in initialize')

            //Initializing variables    
            options = {
              title: {
                display: true,
                text: 'Exceptions By Type'
              }
            }
            callback()
          },

          focus (api, state) {
            console.log('in focus')
            
            // Event handler for submit button
            document.querySelector('#submitBtn').onclick = function () {
              var _fromDate = document.querySelector('#startDate').value //from Date picker
              var _toDate = document.querySelector('#endDate').value //from Date picker

              // Get exception data and then load chart
              GetExceptions(api, _fromDate, _toDate, 'bB', 'RuleIdlingId').then(
                res => {
                  console.log(res)
                  GetExceptions(
                    api,
                    _fromDate,
                    _toDate,
                    'bB',
                    'RulePostedSpeedingId'
                  ).then(res => {
                    console.log(res)
                    LoadChart()
                  })
                }
              )
            }

           
          },
          blur (api, state) {
            // Save any Add-In state
            console.log('in blur')
            /*
            pie chart remain populated on subsequent visits 
            since the chart object is not cleared/re-initialized
            */
          }
        }
      }
