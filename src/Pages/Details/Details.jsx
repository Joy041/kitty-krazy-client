import { useLoaderData } from "react-router-dom";


const Details = () => {
    document.title = 'Kitty-Krazy-Details'

    const loadToyData = useLoaderData()

    const { name, photo, seller, price, ratting, quantity, category, details, email } = loadToyData

    return (
        <div className="my-24">
            <h1 className="text-center text-6xl font-bold text-yellow-500 mb-6">Details</h1>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="md:flex">
                        <div>
                            <h2><span className="text-xl font-bold">Description :</span> <span className="font-bold text-slate-500">{details}</span></h2>
                            <p className="my-2"><span className="font-bold text-xl">Name :</span> <span className="font-bold text-slate-500">{name}</span></p>
                            <p><span className="font-bold text-xl">Price :</span> <span className="text-orange-400 ">{price} tk</span></p>
                            <p className="my-2"><span className="font-bold text-xl">Quantity :</span> <span className="font-bold text-slate-500">{quantity}</span></p>
                            <p className="my-2"><span className="font-bold text-xl">Category :</span> <span className="font-bold text-slate-500">{category}</span></p>
                            <p><span className="font-bold text-xl">Ratting :</span> <span className="font-bold text-slate-500">{ratting}</span></p>
                            <p><span className="font-bold text-xl">Seller :</span> <span className="font-bold text-slate-500">{seller}</span></p>
                            <p><span className="font-bold text-xl">Seller Email :</span> <span className="font-bold text-slate-500">{email}</span></p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-pink-500 border-0 text-xl rancho w-full my-5">Buy Now</button>
                            </div>
                        </div>
                        <div className="card card-compact md:w-96 ms-8 md:me-4  bg-base-100 shadow-xl">
                            <figure><img src={photo} className="h-72" alt="Shoes" /></figure>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;