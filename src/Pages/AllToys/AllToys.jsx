import { useLoaderData } from "react-router-dom";
import ShowToys from "../../MapPage/ShowToys/ShowToys";
import { useEffect, useState } from "react";


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [search, setSearch] = useState('')
    const { totalProductNumber } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0)
    const [productPerPage, setProductPerPage] = useState(10);

    const totalPage = Math.ceil(totalProductNumber / productPerPage)
    const options = [5, 8, 12, 15]

    const totalPageNumber = [...Array(totalPage).keys()]


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://kitty-krazy-server.vercel.app/products?currentPage=${currentPage}&productLimit=${productPerPage}`);
            const jsonData = await response.json();
            setToys(jsonData);
        }
        fetchData()
    }, [currentPage, productPerPage])

    const handleSelectChange = (event) => {
        setProductPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }

    return (
        <div className="my-24 flex flex-col justify-center">
            <input type="text" className="w-64 px-3 py-3 font-bold mb-14 border-2 rounded-xl mx-auto" placeholder="SEARCH..." onChange={e => setSearch(e.target.value)} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto">
                {
                    toys.filter(toy => toy.name.includes(search)).map(toy => <ShowToys
                        key={toy._id}
                        toy={toy}
                    ></ShowToys>)
                }
            </div>
            {/* pagination */}
            <div className="text-center my-12">
                {
                    totalPageNumber.map(number => <button
                        key={number}
                        className={currentPage === number ? 'bg-yellow-500 border-2 me-4 px-2' : 'border-2 me-4 px-2'}
                        onClick={() => setCurrentPage(number)}
                    >{number + 1}</button>)
                }
                <select value={productPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (
                            <option className="border-2 px-2" key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default AllToys;