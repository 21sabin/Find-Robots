import React ,{ Component } from 'react';


const Card=(props)=>{
    // const {name,email}=props;
    console.log(props,"props");
    const style={
        border:'1px solid grey'
    }
    return(
        <div style={style}> 
            <img src={`https://robohash.org/${props.robot.id}`} alt="pic"/>
            <h2>{props.robot.name}</h2>
            <h2>{props.robot.email}</h2>
        </div>
    )
}

export default Card;