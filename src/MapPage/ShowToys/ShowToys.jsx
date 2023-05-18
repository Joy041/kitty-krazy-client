import { Link } from "react-router-dom";


const ShowToys = ({ toy }) => {

    const { _id, name, seller, photo, price, ratting, quantity} = toy

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} className="h-72" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <p><span className="font-bold">Price :</span> <span className="text-orange-400 ">{price} tk</span></p>
                <p><span className="font-bold">Quantity :</span> {quantity}</p>
                <p><span className="font-bold">Seller :</span> {seller}</p>
                <p><span className="font-bold">Ratting :</span> {ratting}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}> <button className="btn bg-pink-500 border-0">View Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowToys;