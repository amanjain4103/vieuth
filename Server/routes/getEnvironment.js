const express = require('express');
const fs = require('fs');
const os = require('os');
const getEnvironmentRoute = express.Router();

/*
    Responses :
        1. res.json("improperEnvironment");
        2. res.json("environmentGetFailed");
        3. res.json("wrongProcess");
        4. res.json(resObj); => having info

*/


getEnvironmentRoute.get('/:process',(req,res)=> {

    if(os.type() === "Windows_NT") {

        try {

            let resObj = {};
            if(req.params.process.toUpperCase()==="PROCESS1") {
                //send P1/PROCESS1.ENV AS JSON
                
                fs.readFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P1\\PROCESS1.ENV`,"utf-8",(err,data)=>{

                    if(err) {
                        res.json("environmentGetFailed");
                    }else {

                        let arr1 = data.split(`\n`)
                        
                        for(let x=0;x<arr1.length;x++) {
                            let tempArr = arr1[x].split("=");
                            resObj[tempArr[0]] = tempArr[1];
                        }
    
                        res.json(resObj);

                    }
                })
                

            }else if(req.params.process.toUpperCase()==="PROCESS2") {
                //send P2/PROCESS2.ENV AS JSON

                fs.readFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P2\\PROCESS2.ENV`,"utf-8",(err,data)=>{

                    if(err) {
                        res.json("environmentGetFailed");
                    }else {
                        
                        let arr1 = data.split(`\n`)
                        
                        for(let x=0;x<arr1.length;x++) {
                            let tempArr = arr1[x].split("=");
                            resObj[tempArr[0]] = tempArr[1];
                        }
    
                        res.json(resObj);

                    }
                })

            }else {
                res.json("wrongProcess");
            }
        } catch (error) {
            res.json("environmentGetFailed");
        }

    } else {
        res.json("improperEnvironment");
    }
    
   
})

module.exports= {
    getEnvironmentRoute
};