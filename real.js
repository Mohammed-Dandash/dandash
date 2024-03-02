// const request = require("request")
// onst forcast=(la,lv,calback)=>{
// const url ="https://api.weatherapi.com/v1/current.json?key=e76623f8189640bea55195732242802%20&q="+ la+"," +lv
// request({url, json:true},(error,response)=>{
    
//     if (error)
//     {
//         calback("reeor",undefined)
//     }
//     else if(response.body.error)
//     {
//         calback(response.body.error.message,undefined)
    
//     }
//     else
//     {
//         calback(undefined,response.body.location.name +  response.body.current.condition.tex)
//     }

// })
// }
// 

// forcast(29.871903452398,26.4941838299718,(error,data)=>
// {
//     console.log(error,data)

// })
// const geo=(adrress,call)
// const url ="https://api.mapbox.com/geocoding/v5/mapbox.places"+adrress+ ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
//  request({url:url, json:true},(error,response)=>{
    
//     if (error)
//     {
//         console.log("error")
//     }
   
//     else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if(response.body.features[0].length=0)
//     console.log("not found")
//   else{
//     const v= response.body.features[0].center[0]
//     console.log(v)
//   }
// })
const d=require("./forcast")
const geo=require("./geo")
const country = process.argv[2]


geo( country , (error , data) => {
    console.log("errpr : " , error)
    console.log("data: "  , data)

    d( data.la , data.lv , (error , data) => {
        console.log("error : " , error)
        console.log("data: " , data)
     } )
 })
