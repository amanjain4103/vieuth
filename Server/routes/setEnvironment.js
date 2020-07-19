const express = require('express');
const fs = require('fs');
const os = require('os');
const setEnvironment = express.Router();

/*
    Responses :
        1. res.json("improperEnvironment");
        2. res.json("environmentSetFailed");
        3. res.json("wrongProcess");
        4. res.json("environmentSetSuccess");

*/


setEnvironment.get('/:process/:key/:value',(req,res)=> {
    
    if(os.type() === "Windows_NT") {

        try {

            if(req.params.process.toUpperCase()==="PROCESS1") {
                //set key value for P1/PROCESS1.ENV
                
                fs.appendFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P1\\PROCESS1.ENV`,`\n${req.params.key.toUpperCase()}=${req.params.value.toUpperCase()}`,(err)=>{
                    if(err) {
                        res.json("environmentSetFailed");
                    }else {
                        res.json("environmentSetSuccess");
                    }
                })
                
                

            }else if(req.params.process.toUpperCase()==="PROCESS2") {
                //set key value for P2/PROCESS2.ENV

                fs.appendFile(`C:\\Users\\${os.userInfo().username}\\Desktop\\Program Files\\P2\\PROCESS2.ENV`,`\n${req.params.key.toUpperCase()}=${req.params.value.toUpperCase()}`,(err)=>{
                    if(err) {
                        res.json("environmentSetFailed");
                    }else {
                        res.json("environmentSetSuccess");
                    }
                })

            }else {
                res.json("wrongProcess");
            }
        } catch (error) {
            res.json("environmentSetFailed");
        }

    } else {
        res.json("improperEnvironment");
    }

    

})

module.exports= {
    setEnvironment
};