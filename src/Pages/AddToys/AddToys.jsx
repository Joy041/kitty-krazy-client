import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddToys = () => {
    const {user} = useContext(AuthContext)


    return (
        <div className="w-2/4 mx-auto my-14">
            <form className="mx-auto" >
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
                <button className='btn bg-orange-300 w-full my-8 text-2xl rancho text-black'>Add Toy</button>
            </form>
        </div>
    );
};

export default AddToys;