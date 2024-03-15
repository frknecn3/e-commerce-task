import { useEffect, useState } from "react";
import { ProductParams } from "../../utils/types";
import './style.css'
import Card from "../../components/Card";
import { useGetAllProductsQuery} from "../../utils/api";

const MainPage = () => {
  const [products, setProducts] = useState<ProductParams[]|[]>([]);
  const {data} = useGetAllProductsQuery('')


  useEffect(() => {

    if(data){setProducts(data)}

    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart',JSON.stringify([]))
    }
    if(!localStorage.getItem('total')){
      localStorage.setItem('total',JSON.stringify(0))
    }
    
  }, [data]);

  return (
    <div className="w-100 h-100 p-5 products-container">


        {products.map((product:ProductParams)=>(
            <Card product={product}/>
        ))}


    </div>
  );
};

export default MainPage;
