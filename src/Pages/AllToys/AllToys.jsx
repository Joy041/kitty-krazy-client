import { useLoaderData } from "react-router-dom";
import ShowToys from "../../MapPage/ShowToys/ShowToys";


const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div className="my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto">
                {
                    toys.map(toy => <ShowToys
                        key={toy._id}
                        toy={toy}
                    ></ShowToys>)
                }
            </div>
        </div>
    );
};

export default AllToys;