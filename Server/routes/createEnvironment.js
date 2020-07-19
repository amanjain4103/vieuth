const express = require('express');
const fs = require('fs');
const os = require('os');
const createEnvironment = express.Router();

/*
    Responses : 
        1. improperEnvironment => when os is not windows
        2. environmentSetupFailed => when unable to create proper enironment
        3. environmentSetupSuccess => when whole environment setup is success

*/


createEnvironment.get('/',(req,res)=>{

    if(os.type() === "Windows_NT") {

        try {

            //Program Files
            
            fs.mkdirSync(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files`,(err)=>{
                if(err) {
                    res.json("environmentSetupFailed");
                }
                //otherwise folder created
            })

            
            //PROCESS1.ENV

            fs.mkdir(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P1`,(err)=>{
                if(err) {
                    res.json("environmentSetupFailed");
                }else {
                    
                    fs.writeFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\p1\\PROCESS1.ENV`,"DATABASE_HOST=PROCESS1HOST\nDATABASE_PASSWORD=PROCESS1SECRET\nQUEUE_CONNECTION_STRING=https://mongodb//process1",(err)=>{
                        if(err) {
                            console.log("error in file")
                        }
                        //otherwise environment set
                    })

                }
            })

            //PROCESS2.ENV
        
            fs.mkdir(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P2`,(err)=>{
                if(err) {
                    res.json("environmentSetupFailed");
                }else {
                    
                    fs.writeFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\p2\\PROCESS2.ENV`,"DATABASE_HOST=PROCESS2HOST\nDATABASE_PASSWORD=PROCESS2SECRET\nQUEUE_CONNECTION_STRING=https://mongodb//process2",(err)=>{
                        if(err) {
                            res.json("environmentSetupFailed");
                        }else {
                            res.json("environmentSetupSuccess");
                        }
                    })

                }
            })

    } catch (error) {
        res.json("environmentSetupFailed");
    }

    }else {
        res.json("improperEnvironment")
    }

})

module.exports = {
    createEnvironment
}



