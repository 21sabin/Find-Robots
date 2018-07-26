import React from 'react';
import Card from './Card';


const CardList=({ robots }) =>{
    if(false){
        throw new Error("I crashed");
    }
    const style={
        backgroudColor:'grey',
        margin:"auto"
    }
    const CardList=robots.map((robot)=>{
        return <Card key={robot.id} robot={robot} />
    })
   
    return (
        <div style={style}>
            { CardList }
        </div>
    )
}

export default CardList;