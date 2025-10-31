import { useState } from "react";
import './checkoutdetails.scss';
const money = (n) =>
    Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 0 });
const CheckoutDetails = () => {
    const [cartItems] = useState([
        { id: 1, title: "Asgaard Sofa", price: 250000, qty: 1 },
        { id: 2, title: "Casaliving Wood", price: 270000, qty: 1 },
    ]);
    const currencySymbol = "$";
    const subtotal = cartItems.reduce(
        (acc, it) => acc + it.price * (it.qty ?? 1),
        0
    );
    return (
        <aside className='checkoutCard'>
            <div className="checkoutHead co-row">
                <span>Product</span>
                <span>Subtotal</span>
            </div>
            {cartItems.map((it) => (
                <div className='co-row' key={it.id}>
                    <span className="co-product">{it.title} <span className="co-muted">X {it.qty}</span></span>
                    <span>
                        {currencySymbol} {money(it.price * it.qty)}
                    </span>
                </div>
            ))}
            <div className="co-row">
                <span className="co-muted">Subtotal</span>
                <span>
                    {currencySymbol} {money(subtotal)}
                </span>
            </div>
            <div className="co-row co-total">
                <span>Total</span>
                <span className="co-total-amount">
                    {currencySymbol} {money(subtotal)}
                </span>
            </div>
            <div className="co-methods">
                <label className="co-method">
                    <input type="radio" name="pay" defaultChecked /> Direct Bank Transfer
                </label>
                <p className="co-help">
                    Make your payment directly into our bank account. Please use your
                    Order ID as the payment reference. Your order will not be shipped
                    until the funds have cleared in our account.
                </p>
                <label className="co-method co-disabled">
                    <input type="radio" name="pay" defaultChecked /> Direct Bank Transfer
                    <input type="radio" name="pay" /> Cash On Delivery
                </label>
            </div>

            <p className="co-privacy">
                Your personal data will be used to support your experience throughout this website,
                to manage access to your account, and for other purposes described in our
                <a href="#"> privacy policy</a>.
            </p>

            <button className="co-place">Place order</button>
        </aside>
    )
}

export default CheckoutDetails