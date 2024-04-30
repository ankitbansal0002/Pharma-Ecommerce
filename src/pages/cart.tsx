
import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";

import { Link } from "react-router-dom";
import CartItemCard from "../components/cart-item";
// import { RootState, server } from "../redux/store";
// import { CartItem } from "../types/types";


const cartItems = [
  {
    productId: "1233Abc",
    photo:"https://www.netmeds.com/images/product-v1/600x600/15577/accu_chek_active_glucose_monitor_with_free_10_test_strips_0_3.jpg",
    name:"Accu-Chek Active Glucose Monitor with Free 10 Test Strips",
    price:789,
    quantity : 5,
    stock:10          
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges = 200;
const discount = 200;
const total = subtotal+ tax + shippingCharges;


const Cart = () => {

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

      return () => {
        clearTimeout(timeOutID);
        setIsValidCouponCode(false);
      };
    }, [couponCode]
  );

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItemCard 
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;