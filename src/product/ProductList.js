import Product from "./Product";
import { useEffect, useState } from "react";

function ProductList() {
    const [allProducts, setAllProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(true);
    const [isTv, setIsTv] = useState(true);
    const [isLaptop, setIsLaptop] = useState(true);
    const [isEarphones, setIsEarphones] = useState(true);
    const [isCamera, setIsCamera] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllProducts(data.data)
            });
    }, []);

    return (
        <div className={"flex flex-wrap gap-4 bg-slate-400"}>
            {allProducts.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
}


export default ProductList;