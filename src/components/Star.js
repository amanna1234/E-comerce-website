import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';


export default function Star(props) {
  let star = [];

  for(let i=0; i<=4; i++){
    if(props.star>= i +1){
      star.push(<StarIcon style={{color:"gold"}}/>)
    } else if(props.star> i && props.star<i+1 ){
      star.push(<StarHalfIcon  style={{color:"gold"}}/>)
    }else{
      star.push(<StarBorderIcon  style={{color:"gold"}}/>)
    }
  }
  return (
    <>
    <div className='d-flex '>
      <div>Star:</div>
      {star.map((i, index)=>{
        return <div key={index}>{i}</div>
      })}
      <div>{props.star}</div>
      </div>
      
    
    </>
  
    
  )
}