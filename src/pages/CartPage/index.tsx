import CartPageCard from "../../components/CartPageCard";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartJSON = localStorage.getItem("cart");
  const cart: number[] = cartJSON ? JSON.parse(cartJSON) : null;
  const totalJSON = localStorage.getItem("total");
  const total: number = Math.round(totalJSON ? JSON.parse(totalJSON) : null);

  return (
    <div className="cart-wrapper d-flex justify-content-center p-5 gap-5">
      <div className="cart-products-wrapper bg-light w-75 p-5 border rounded-5 border-black  ">
        {cart?.length ? (
          cart?.map((product) => <CartPageCard id={product} />)
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <h2 className="pt-5 text-center">Your Cart is Currently Empty.</h2>
            <Link to={"/"} className="fs-4 text-decoration-none ">
              Go Back to Shopping
            </Link>
          </div>
        )}
      </div>

      <div className="cart-right w-25 h-100 border-black border rounded-2 p-4 text-center">
        <h2>Total Price: ${total}</h2>
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-success">CHECKOUT</button>
          <button className="btn btn-primary">USE COUPON</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
