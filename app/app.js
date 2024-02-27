// const fs=require ("fs")
// fs.writeFileSync("data .txt","is")
// console.log(fs.readFileSync("data.txt").toString())
// const val =require("validator")
const data20 =require("./data10")
const yargs = require("yargs")

//console.log(val.isEmail("xx"))

yargs.command({
    command:"add",
    describe:"addd",
    builder:{
        fname:
        {

            describe:"first name",
           demandOption:true,
            type: "string"
        },
        lname:
        {

            describe:"last name",
           demandOption:true,
            type: "string"
        },
    },
    handler:(x)=>{
       data20.add10(x.id,x.fname,x.lname,x.age,x.city)
    }
})

yargs.command({
    command:"delete",
    describe:"delete item",
    handler:(x)=>{
        data20.del(x.id)
    }
})
yargs.command({
    command:"read",
    describe:"read item",
    handler:(x)=>{
        data20.read(x.id)
    }
})
yargs.command({
    command:"list",
    describe:"view",
    handler:()=>{
        data20.list()
    }
})
yargs.parse()
//console.log(fs.readFileSync("data.txt").toString())
//