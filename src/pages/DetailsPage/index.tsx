import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../utils/api";
import { ProductParams } from "../../utils/types";
import { addToCart, addToTotal, renderStarRatings } from "../../utils/functions";

const DetailsPage = () => {
  const params = useParams<{ id: string }>();

  const product: ProductParams | undefined = useGetProductByIdQuery(
    params.id || ""
  ).data;

  return (
    <>
      <div className="d-flex w-100 justify-content-around p-4 pt-5">
        <div
          className="border border-2 p-4 d-flex justify-content-center rounded rounded-5"
          style={{ width: "40vw", height: "80vh" }}
        >
          <img src={product?.image} className="img-fluid " alt="" />
        </div>

        <div className="p-4 w-100 bg-light p-4 rounded rounded-5 fw-semibold fs-2 ">
          <div className="justify-content-end  p-4">
          <div className="d-flex justify-content-start fs-5" style={{color:'rgb(60,60,60)'}}>
            <span className="text-capitalize">Category: <span style={{color:'rgb(150,150,150)'}}>{product?.category}</span></span>
          </div>
            <p>{product?.title}</p>
            {
              <div>
                <span className="w-100 text-center text-warning">
              {renderStarRatings(product?.rating.rate || 0)}
              <span className="text-dark text-center">
                {product?.rating.rate}
              </span>
            </span>
            
            
            <div><span className="fs-5">Out of {product?.rating.count} reviews</span></div>
            </div>
            }
          </div>
          <p className="fs-1 ps-4">${product?.price}</p>
          
            <button className="ms-4 btn btn-success p-2 fs-4" onClick={()=>{addToCart(product?.id as number);addToTotal(product?.price,'add')}}>Add To Cart</button>
          

          <div className="w-75 d-flex flex-row p-4 justify-content-center fs-5">
            <p>{product?.description}</p>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
