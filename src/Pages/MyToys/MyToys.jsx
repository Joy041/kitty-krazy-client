import { useLoaderData } from "react-router-dom";
import ShowMyToys from "../../MapPage/ShowMyToys/ShowMyToys";


const MyToys = () => {
    const loadMyToys = useLoaderData()
    return (
        <div>
            <div>
                {
                    loadMyToys.map(toy => <ShowMyToys
                       key={toy._id}
                       toy={toy}
                    ></ShowMyToys>)
                }
            </div>
        </div>
    );
};

export default MyToys;