import { Link } from "react-router-dom";



const ShowToys = ({ toy }) => {

    const { _id, name, seller, photo, price, quantity, category } = toy

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle md:w-32 w-8 md:h-32 h-8">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="md:font-bold font-semibold md:text-xl">{name}</td>
            <td className="text-orange-400">{price} tk</td>
            <td>{quantity}</td>
            <td>{category}</td>
            <td>{seller}</td>
            <td>
                <Link to={`/details/${_id}`}><button className="btn bg-pink-500 border-0 rancho">View Details</button></Link>
            </td>
        </tr>
    );
};

export default ShowToys;