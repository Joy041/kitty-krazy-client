// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Deal from "../Deal/Deal";
import Gallery from "../Gallery/Gallery";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import ShowSubCategory from "../../../MapPage/ShowSubCategory/ShowSubCategory";
import { useLoaderData } from "react-router-dom";



const Home = () => {
    const loadProducts = useLoaderData();
    const [products, setProducts] = useState(loadProducts)
    document.title = 'Kitty-Krazy-Home';

    const filterResult = (catItem) => {
        const result = loadProducts.filter(product => {
            return product.category === catItem
        })
        setProducts(result)
    }
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-center text-5xl font-bold text-yellow-400">Search by Categories</h1>
                    <div className="text-center my-10">
                        <button onClick={() => filterResult('Teddy bear')} className="btn me-5 text-base bg-pink-500 border-0 font-bold">Teddy</button>
                        <button onClick={() => filterResult('Fox')} className="btn me-5 bg-pink-500 text-base border-0 font-bold">Fox</button>
                        <button onClick={() => filterResult('Cat')} className="btn bg-pink-500 border-0 text-base font-bold">Cat</button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        {
                            products.slice(0, 2).map(product => <ShowSubCategory
                                key={product._id}
                                product={product}
                            ></ShowSubCategory>)
                        }
                    </div>
                </div>
            <Deal></Deal>
            <Client></Client>
        </div>
    );
};

export default Home;