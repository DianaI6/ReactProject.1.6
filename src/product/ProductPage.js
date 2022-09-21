import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Category from "./Category";
import { Outlet, useNavigate } from "react-router-dom";

function ProductPage() {
    const [allProducts, setAllProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(true);
    const [isTv, setIsTv] = useState(true);
    const [isLaptop, setIsLaptop] = useState(true);
    const [isEarphones, setIsEarphones] = useState(true);
    const [isCamera, setIsCamera] = useState(true);


    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // navigate('auth');
        }
    },[]);



    return (
        <div className="flex gap-5">
            <div className="w-96 flex-shrink-0 bg-slate-300">
                <Category
                // isMobile={isMobile}  isTv={isTv} isLaptop={isLaptop} isEarphones={isEarphones} isCamera={isCamera} 
                // ChangeCategoy={setIsMobile} 
                />
            </div>
            {/* <ProductList list={allProducts} /> */}
            <Outlet />
        </div>
    );
}


export default ProductPage;