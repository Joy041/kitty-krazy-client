import { Link } from "react-router-dom";


const ShowMyToys = ({ toy, deleteBtn }) => {

    const { _id, name, seller, photo, price, ratting, quantity, details } = toy



    return (
        <tr>
            <td><button onClick={() => deleteBtn(_id)} className="btn">X</button></td>
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
            <a href="#" data-toggle="tooltip" title={`${details}`}><td>{details.slice(0,20)}...</td></a>
            <td>
            <Link to={`/update/${_id}`}><button className="btn  btn-xs">Update</button></Link>
            </td>
        </tr>
    );
};

export default ShowMyToys;