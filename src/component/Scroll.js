import React from 'react';


const Scroll=(props)=>{
    console.log(props,"propss scril")
    return (
        <div style={{overflowY:"scroll",border:"1px solid black",width:"800px",height:"800px"}}>
            {props.children}
        </div>
    )
}

export default Scroll;