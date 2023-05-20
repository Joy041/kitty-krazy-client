import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const loadToyData = useLoaderData()

    const { _id, price, quantity, details } = loadToyData

    const handleUpdateToyForm = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const toyInfo = { price, quantity, details }

        fetch(`https://kitty-krazy-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.matchedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

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
                </div><input className='btn bg-pink-500 border-0 w-full my-8 text-2xl rancho text-black' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateToys;