import React from 'react';
import NavBar from '../Navbar/Navbar';
import AskAccount from './AskAccount';
import AskDelievry from './AskDelievry';
import AskPayment from './AskPayment';
import AskReviewOrder from './AskReviewOrder';
const CheckoutPage = () => {
    // will use redux to manage the state such as isAskAccount?
    // then you can access AskDelivery Page and so on....
    return (
        <div>
            <NavBar/>
            <AskAccount/>
            {/* <AskDelievry/>
            <AskPayment/>
            <AskReviewOrder/> */}
        </div>
      );
}
 
export default CheckoutPage;


