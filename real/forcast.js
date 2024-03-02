 const request = require("request")
const forcast=(la,lv,calback)=>{
const url ="https://api.weatherapi.com/v1/current.json?key=e76623f8189640bea55195732242802%20&q="+ la+"," +lv
request({url, json:true},(error,response)=>{
    
    if (error)
    {
        calback("reeor",undefined)
    }
    else if(response.body.error)
    {
        calback(response.body.error.message,undefined)
    
    }
    else
    {
        calback(undefined,response.body.location.name +  response.body.current.condition.text+ response.body.current.temp_c )
    }

})
}
module.exports=forcast

