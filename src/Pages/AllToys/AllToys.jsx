import { useLoaderData } from "react-router-dom";
import ShowToys from "../../MapPage/ShowToys/ShowToys";
import { useState } from "react";


const AllToys = () => {
    const toys = useLoaderData()
    const [search, setSearch] = useState('')

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
        </div>
    );
};

export default AllToys;