import React from "react";
import Button from '@mui/material/Button';
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
const Product = (props) => {
   // let counter = 5;
   const [counter, setCount]=React.useState(5);
   //console.log(props.theme);

    const countUp = () => {
        setCount(counter + 1);
        //counter++;
        //alert(counter);
    }
    const countDown = () => {
        setCount(counter - 1);
        //counter--;
    }
  
    let themeStyle ={
     color: counter >=5 ?  'green':'red',
     backgroundColor: props.theme,

    }
    return (  
        
<div style={themeStyle}>

<h1 ><AccessTimeFilledIcon /> Counter Component{" "}</h1>
 <Button variant="contained" onClick={countDown}>-</Button> 
 {" "+counter +" "} 
 <Button variant="contained" onClick={countUp}>+</Button><br/>
 Current counterValue is: {counter}<br/>
 {counter <0 && <span>Count is less than zero</span>}
 <hr/>
</div>
 

    );
}
 
export default Product;