import { FaShoppingBasket } from "react-icons/fa";
import './style.css'
const Header = () => {
    
    return (
      <header className="header w-100 flex-row d-flex justify-content-between align-items-center bg-info p-4" style={{color:'black', height: '100%'}}>
          <div className="d-flex flex-row w-100 align-items-center">
              <a href="/" className="text-decoration-none">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                  <img src="/vite.svg" alt="" />
                  <span className="text-white fs-2 fw-bold">E-Commerce</span>
                  </div>
              </a>
          </div>
          
          <div className="w-100">

          </div>

          <div className="w-50">
            <a href="/cart"><FaShoppingBasket fontSize={45} color="white"/></a>
          </div>
  
          <ul className="d-flex w-100 flex-row gap-4 list-unstyled align-items-center justify-content-center mb-0">
              <li><a href="" className="text-white text-decoration-none">PRODUCTS</a></li>
              <li><a href="" className="text-white text-decoration-none">SERVICES</a></li>
              <li><a href="" className="text-white text-decoration-none">ABOUT US</a></li>
              <li><a href="" className="text-white text-decoration-none">CONTACT</a></li>
              <li><a href="" className="text-white text-decoration-none">FAQ</a></li>
          </ul>
      </header>
    )
  }
  
  export default Header;
  