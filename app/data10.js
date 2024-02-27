const fs=require("fs")
const add10=(id,fname,lname,age,city)=>
{
    const read=loadData()
    const dub=read.filter((obj)=>
    {
        return obj.id==id
    })
    if(dub.length==0){
    read.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
    SaveData(read)
}
else{
    console.log("id be used already")
}
}
const loadData=()=>
{try{const datajson=fs.readFileSync("data10.json".toString())
return JSON.parse(datajson)}
catch{
    return []
}  
}
const SaveData=(read)=>
{
    const d=JSON.stringify(read)
    fs.writeFileSync("data10.json",d)
}
const del=(id)=>
{
    const all=loadData()
    const keep=all.filter((obj)=>{
        return obj.id !== id
       
    })
    SaveData(keep)
    console.log("item already delted")
}
const read=(id)=>{
    const all=loadData()
    const finditem=all.find((obj)=>{
        return obj.id == id
    })
    if(finditem){
    console.log(finditem)
    }
    else 
    {
        console.log("not found id")
    }
}
const list=()=>
{
    const all=loadData()
    const li=all.forEach((obj)=>{
        console.log(obj.fname,obj.age,obj.city)
    })
}
module.exports={
    add10,
    del,
    read,
    list
}