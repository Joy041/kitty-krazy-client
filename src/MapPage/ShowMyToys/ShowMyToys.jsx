

const ShowMyToys = ({ toy, deleteBtn }) => {

    const { _id, name, seller, photo, price, ratting, quantity } = toy



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteBtn(_id)} className="btn">X</button>
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
    );
};

export default ShowMyToys;