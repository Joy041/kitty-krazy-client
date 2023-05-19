

const ShowMyToys = ({ toy }) => {

    const { name, seller, photo, price, ratting, quantity } = toy

    return (
        <div className="border-2 max-w-7xl mx-auto my-16 h-[525px]">
            <div className="overflow-x-auto max-w-7xl mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ratting</th>
                            <th>Quantity</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <button className="btn">X</button>
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{seller}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{price} tk</td>
                            <td>{ratting}</td>
                            <td>{quantity}</td>
                            <th>
                                <button className="btn  btn-xs">Update</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowMyToys;