import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddToys = () => {
    const {user} = useContext(AuthContext)
    document.title = 'Kitty-Krazy-AddToys'

    const handleAddToyForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;

        const allInformation = {name, seller, photo, email, price, ratting, quantity, category, details}

        fetch('https://kitty-krazy-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allInformation)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="w-2/4 mx-auto my-14">
            <form className="mx-auto" onSubmit={handleAddToyForm} >
                <div className="flex lg:flex-row flex-col lg:justify-between">
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Toy Name" name='name' required className="input input-bordered input-width lg:w-96 " />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Seller</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Seller Name" name='seller' defaultValue={user?.displayName} required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Toy Photo" name='photo' required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Email" name='email' defaultValue={user?.email} required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                    </div>
                    <div className="divider divider-horizontal mt-4"></div>
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Enter Toy Price" name='price' required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Ratting</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Toy Ratting" name='ratting' required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Quantity" name='quantity' required className="input input-bordered input-width lg:w-96" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Category Name" name='category' required className="input input-bordered lg:w-96" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <textarea className="textarea textarea-black border-inherit w-full h-52 mt-6" name="details" placeholder="Details Description"></textarea>
                </div>
                <input className='btn bg-pink-500 border-0 w-full my-8 text-2xl rancho text-black' type="submit" value= "Add Toy" />
            </form>
        </div>
    );
};

export default AddToys;