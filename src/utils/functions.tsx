import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { ProductParams } from "./types";
import { Bounce, toast } from "react-toastify";



export const renderStarRatings = (rating: number):JSX.Element[] => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return Array.from({ length: fullStars }, (_, index) => (
      <FaStar key={index} />
    )).concat(
      Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={fullStars + index} />
      ))
    );
  };

export const addToCart = (id:number):void =>{
  const cartJSON = localStorage.getItem('cart');
  if (cartJSON) {
    const cart: ProductParams[] = JSON.parse(cartJSON);
    localStorage.setItem('cart',JSON.stringify([...cart,id]))
    toast.success('Item was added to the cart.', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  } else {
    console.log('no cart was found')
  }
}

export const removeFromCart = (id: number): void => {
  const cartJSON = localStorage.getItem('cart');
  if (cartJSON) {
    const cart: number[] = JSON.parse(cartJSON);
    const indexToRemove = cart.indexOf(id);
    if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1); // Remove one element at the found index
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Item removed from cart');
      console.log(cart);
    } else {
      console.log('Item not found in cart');
    }
  } else {
    console.log('No cart was found');
  }
}

export const addToTotal=(amount:any,action:'add'|'subtract'):void=>{
  const totalJSON = localStorage.getItem('total');
  if (totalJSON) {
    const total = JSON.parse(totalJSON)
    const updatedTotal = total + (amount)*(action==='add'?1:-1)
    localStorage.setItem('total',updatedTotal)
  }
  else{}
}