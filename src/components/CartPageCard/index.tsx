
import { useGetProductByIdQuery } from '../../utils/api'
import { FaTrashCan } from 'react-icons/fa6'
import { addToTotal, removeFromCart } from '../../utils/functions'
import { ProductParams } from '../../utils/types'

const CartPageCard = ({id}:{id:number}) => {

    const product:ProductParams|undefined = useGetProductByIdQuery(String(id)).data


  return (
    <div className='p-3 m-3 rounded-3 bg-info text-white d-flex align-items-center justify-content-between '>
        <div className=' p-3 bg-white rounded-4'  style={{width:'15rem',height:'15rem'}}>
            <img src={product?.image} alt="product-img" className='img-fluid' style={{width:'100%',height:'100%'}} />
        </div>

        <div className='w-25'>
            <span className='fs-4'>{product?.title}</span> 
        </div>

        <div>
            <span className='fs-3'>${product?.price}</span>
        </div>

        <div>
            <button onClick={()=>{removeFromCart(product?.id||0);window.location.reload();addToTotal(product?.price,'subtract')}}><FaTrashCan size={25} /></button>
        </div>
    </div>
  )
}

export default CartPageCard