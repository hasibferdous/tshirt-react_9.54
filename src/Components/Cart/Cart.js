import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length===0){
        message = <p>Please buy at least one item !!!</p>
    }
    else if(cart.length===1){
        message =<div>
            <p>Please buy more !</p>
        </div>
    }
    else {
        message =<p>Thanks for buying!</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? 'orange':'purple'}>Order Summary</h2>
            <h4 className={`bold ${cart.length === 2 ?'blue':'yellow'}`}>Order Quantity:{cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    >
                        {tshirt.name}
                        <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
                    </p>
                    )
            }
            {
                message
            }
            {cart.length === 3 ? <p>Would you gift 3 people ?</p> :<p>Buy ! Buy !</p>}
            <p>and operator</p>
            {cart.length ===2 && <h2>Double items!</h2>}
            <p>or operator</p>
            {cart.length === 4|| <h2>4 items</h2>}


        </div>
    );
};

export default Cart;


/**
 * Conditional Rendering
 * 1. use element in a variable and then use if-else to set value
 * 2. ternary operation condition ? true : false
 * 3. && operator (if condition is true, i want to display something )
 * 4. || operartor (if condition is false, i want to display something )
 */