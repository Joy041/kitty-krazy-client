import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Deal from "../Deal/Deal";
import Gallery from "../Gallery/Gallery";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import SubCategory from "../Toys/SubCategory/SubCategory";



const Home = () => {
    const loadProducts = useLoaderData();
    const [products, setProducts] = useState(loadProducts)

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
                        products.slice(0, 2).map(product => <SubCategory
                            key={product._id}
                            product={product}
                        ></SubCategory>)
                    }
                </div>
            </div>
            <Deal></Deal>
            <Client></Client>
        </div>
    );
};

export default Home;


{/* <Tabs className={'max-w-7xl mx-auto'}>
    <TabList>
        <Tab className={'me-14'} onClick={() => filterResult('Cat')}>Fox</Tab>
        <Tab>Title 2</Tab>
    </TabList>

    <TabPanel className={'flex'}>
        {
            products.slice(0, 2).map(product => <Teddy
                key={product._id}
                product={product}
            ></Teddy>)
        }
    </TabPanel>
    <TabPanel>
        <h2>Any content 2</h2>
    </TabPanel>
</Tabs> */}