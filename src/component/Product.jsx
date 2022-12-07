import { useContext } from "react";
import { GlobalContext } from "./Context";
// import Spinners from "./Spinners"
import { Link } from "react-router-dom";

const ProductList = () =>{
    const { productList, getProductDetails } = useContext(GlobalContext);
    console.log(productList)
    return(
        <>
        <div className="product-list">
        <div className='main__container grid grid-cols-5 gap-3'>
                {productList.products?.map((user, index) => 
                <Link to={{pathname: 'products-details'}} key={index}>
                    <div className="product__card bg-slate-700 my-5 text-white">
                    <div className="img"><img src={user.thumbnail} alt="" /></div>
                    <p className='p-5'> {user.description} </p>
                    </div>
                </Link>)}
            </div>
      </div> 
        
        </>
    )
}

export default ProductList;
