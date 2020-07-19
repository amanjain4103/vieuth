import React from 'react';
import "./RightBar.css";

const RightBar = ({processInfoObject}) => {

    let processInfoObjectKeys = [];
    for(let x in processInfoObject) {
        processInfoObjectKeys.push(x);
    }   
    let count=0;
    return (
        <div className="right-bar-container">
            <div>
               {"{"} <br />
               { processInfoObjectKeys.map(item => {
                   return <h3 key={++count}>{item} : {processInfoObject[item]}</h3> 
               })}
               <br />
               {"}"}
            </div>
        </div>
    )
}

export default RightBar;