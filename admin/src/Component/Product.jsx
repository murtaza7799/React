import React from "react";
const Product = () => {
   // let counter = 5;
   const [counter, setCount]=React.useState(5);

    const countUp = () => {
        setCount(counter + 1);
        //counter++;
        //alert(counter);
    }
    const countDown = () => {
        setCount(counter - 1);
        //counter--;
    }
   
    return (  
<div>
<h1>Counter Component</h1>
 <button onClick={countDown}>-</button> {counter} <button onClick={countUp}>+</button><br/>
 Current counterValue is: {counter}<br/>
 {counter <0 && <span>Count is less than zero</span>}
</div>
 

    );
}
 
export default Product;