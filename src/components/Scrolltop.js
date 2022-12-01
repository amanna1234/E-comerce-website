import React ,  {useEffect} from 'react';
import styled from 'styled-components';


const Button = styled.button`
    display: none; /* Hidden by default */
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 20000; /* Make sure it does not overlap */
    border: 2px solid gold; /* Remove borders */
    outline: none; /* Remove outline */
    background-color:#212529; /* Set a background color */
    color:white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    border-radius: 5px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
    opacity: 0.7;

    &:hover {
        background-color: #555;
    }
`
    
  
  
  

export default function Scrolltop() {
   let mybutton;
    useEffect(() => {
      
        mybutton = document.getElementById('myBtn');
       
      }, []);
    

    let scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      window.onscroll = scrollFunction;

      let topFunction = (e)  =>{
        
        document.body.scrollTop = 0; // For Safari
        
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
  return (
    
      <Button className='shadow' onClick={topFunction} id="myBtn" title="Go to top">
        Top
        </Button>
   
  );
}


    





  
  