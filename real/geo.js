
 const request = require("request")
 const geo = ( address , call) => {

    const Url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

  request ({url : Url , json : true} , (error , response) => {
     
    if (error){
        call ("unable to connect geocode service" , undefined)
    }else if (response.body.message)  {
        call(response.body.message , undefined )
    } else if (response.body.features.length == 0) {
         call("Unable to find location" , undefined)
    } else {

        call(undefined , {
             longtitude : response.body.features[0].center[0],
             latitude : response.body.features[0].center[1]
        } )
       
    }
  })
}

module.exports = geo
    