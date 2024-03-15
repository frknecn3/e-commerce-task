import { addToCart, addToTotal} from '../../utils/functions'
import { ProductParams } from '../../utils/types'
import './style.css'

const Card = ({ product }: { product: ProductParams }) => {


    return (
        <div className="card shadow " style={{ width: "12rem" }}>

            <a href={`/details/${product.id}`}><img src={product.image} className=" p-4 img-fluid" style={{ width: '200px', height: '200px',borderRadius:'15px' }} alt="..." /></a>
            
            <div className="card-body d-flex flex-column justify-content-around align-items-center gap-3">

                <span className="w-100 card-title text-nowrap fw-bold overflow-x-hidden" style={{textOverflow:'ellipsis'}}>{product.title}</span>

                <span className="card-text fw-semibold" >{product.price}$</span>

                <div className='w-100 d-flex justify-content-center'>
                    
                        <button className="btn btn-primary" onClick={()=>{addToCart(product.id);addToTotal(product.price,'add')}}>ADD TO  CART</button>
                    
                </div>

            </div>
        </div>

    )
}

export default Card