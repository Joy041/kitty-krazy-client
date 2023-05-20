import { useLoaderData } from "react-router-dom";


const UpdateToyInfo = () => {
    const loadToyData = useLoaderData()
    console.log(loadToyData)

    const { price, quantity, details } = loadToyData

    const handleUpdateToyForm = event => {
        event.preventDefault()

    }

    return (
        <div className="w-1/2 mx-auto mt-14 mb-40">
            <form className="mx-auto" onSubmit={handleUpdateToyForm} >
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Enter Toy Price" name='price' defaultValue={price} required className="input input-bordered input-width lg:w-96" />
                        </label>
                    </div>
                    <div className="divider divider-horizontal mt-4"></div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Quantity" name='quantity' defaultValue={quantity} required className="input input-bordered input-width lg:w-96" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <textarea className="textarea textarea-black border-inherit w-full h-52 mt-6" defaultValue={details} name="details" placeholder="Details Description"></textarea>
                </div>
                <input className='btn bg-pink-500 border-0 w-full my-8 text-2xl rancho text-black' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateToyInfo;