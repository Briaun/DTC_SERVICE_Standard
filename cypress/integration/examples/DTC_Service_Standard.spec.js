/// <reference types="cypress" />

describe('DTC_Service_Standard 191', function() {
    it('Test getVehicleMaster', function() {
       cy.request({
          method : 'POST',
          url : 'https://203.151.92.191:8099/getVehicleMaster',
          body: {
            "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
          },
          headers: {
             'content-type' : 'application/json'
          }
       }).then(function (response){
          
            expect(response.body).to.include({
               "error": false,
               "status": "200",
               "message": "ok"           
            })
       })
    }),
    it('Test getGroupMaster', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getGroupMaster',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getRealtimeData', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getRealtimeData',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
           ,"gps_list" : ["102651321122","011097800000020","102651318835","102651323831"]
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),

   it('Test getHistory', function() {
      cy.wait(65000)
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getHistory',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
           "gps_id" : "102651321122",
           "start_period" : "2020-10-26 00:00:00",
           "end_period" : "2020-10-26 11:00:00"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),

   it('Test getPOI', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getPOI',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getGPSNotification', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getGPSNotification',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getSummaryTripReport', function() {
      cy.wait(65000)
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getSummaryTripReport',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
           "gps_list" : ["102651322123","011097800000146" ],
	       "start_period" : "2020-10-02 00:00:00",
	       "end_period" : "2020-10-02 23:59:59"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getDLTReport', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getDLTReport',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
           "gps_list" : [],
	         "start_period" : "2020-10-02 00:00:00",
	         "end_period" : "2020-10-02 23:59:59",
	         "report_code" : "01"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getRealtimeData191', function() {
      cy.request({
         method : 'POST',
         url : 'https://203.151.92.191:8099/getRealtimeData191',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
           "gps_list" : ["102651322123"]
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   })
 }),


 //95
 describe('DTC_Service_Standard 95', function() {
   it('Test getVehicleMaster', function() {
      cy.wait(65000)
      cy.request({
         method : 'POST',
         url : 'https://203.151.93.95:8099/getVehicleMaster',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getGroupMaster', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getGroupMaster',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getRealtimeData', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getRealtimeData',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
          ,"gps_list" : ["102651321122","011097800000020","102651318835","102651323831"]
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),

  it('Test getHistory', function() {
     cy.wait(65000)
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getHistory',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_id" : "102651321122",
          "start_period" : "2020-10-26 00:00:00",
          "end_period" : "2020-10-26 11:00:00"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),

  it('Test getPOI', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getPOI',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getGPSNotification', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getGPSNotification',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getSummaryTripReport', function() {
     cy.wait(65000)
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getSummaryTripReport',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : ["102651322123","011097800000146" ],
         "start_period" : "2020-10-02 00:00:00",
         "end_period" : "2020-10-02 23:59:59"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getDLTReport', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getDLTReport',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : [],
           "start_period" : "2020-10-02 00:00:00",
           "end_period" : "2020-10-02 23:59:59",
           "report_code" : "01"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getRealtimeData191', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.95:8099/getRealtimeData191',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : ["102651322123"]
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  })
}),

//103
describe('DTC_Service_Standard 103', function() {
   it('Test getVehicleMaster', function() {
      cy.wait(65000)
      cy.request({
         method : 'POST',
         url : 'https://203.151.93.103:8099/getVehicleMaster',
         body: {
           "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
         },
         headers: {
            'content-type' : 'application/json'
         }
      }).then(function (response){
         
           expect(response.body).to.include({
              "error": false,
              "status": "200",
              "message": "ok"           
           })
      })
   }),
   it('Test getGroupMaster', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getGroupMaster',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getRealtimeData', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getRealtimeData',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
          ,"gps_list" : ["102651321122","011097800000020","102651318835","102651323831"]
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),

  it('Test getHistory', function() {
     cy.wait(65000)
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getHistory',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_id" : "102651321122",
          "start_period" : "2020-10-26 00:00:00",
          "end_period" : "2020-10-26 11:00:00"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),

  it('Test getPOI', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getPOI',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getGPSNotification', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getGPSNotification',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getSummaryTripReport', function() {
     cy.wait(65000)
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getSummaryTripReport',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : ["102651322123","011097800000146" ],
         "start_period" : "2020-10-02 00:00:00",
         "end_period" : "2020-10-02 23:59:59"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getDLTReport', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getDLTReport',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : [],
           "start_period" : "2020-10-02 00:00:00",
           "end_period" : "2020-10-02 23:59:59",
           "report_code" : "01"
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  }),
  it('Test getRealtimeData191', function() {
     cy.request({
        method : 'POST',
        url : 'https://203.151.93.103:8099/getRealtimeData191',
        body: {
          "api_token_key" : "HP1T2SK8ZA7NLFEQ2CNRBYGMZJ8F1EVMSPA64YTUDRH95B7WK3XD9JQ5LX3VUGW4",
          "gps_list" : ["102651322123"]
        },
        headers: {
           'content-type' : 'application/json'
        }
     }).then(function (response){
        
          expect(response.body).to.include({
             "error": false,
             "status": "200",
             "message": "ok"           
          })
     })
  })
})