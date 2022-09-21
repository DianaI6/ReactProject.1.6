import { Link } from 'react-router-dom';

function Product({ product }) {
    const { id, title, price, img, brand } = product;
    // console.log(id, title, price, img, brand);
    return (
        <Link to={`/products/${product.id}`} >
            <div className="flex flex-col text-center" >
            <img className="w-96 inline ml-10 mt-9" src={img} alt={"product - " + title} />
            <h2>{brand} </h2>
            <p>{price}</p>
        </div>
        </Link>       
    );
}


export default Product;