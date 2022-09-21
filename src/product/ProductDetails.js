import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";


function ProductDetails() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products/d8oqw24asde234234qwexfwfwf223OPdcT2`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.data[0]);
            });
    }, [id]);

    if (!data) return <h1>Loading...</h1>;

    return (
        <div>
            <Product  product={data} /> 
            {/* ???? */}
            {/* {JSON.stringify(data)} */}
        </div>
    );
}

export default ProductDetails;