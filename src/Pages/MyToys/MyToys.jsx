import ShowMyToys from "../../MapPage/ShowMyToys/ShowMyToys";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const {user} = useContext(AuthContext)

    const url = `https://kitty-krazy-server.vercel.app/myToy?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyToys(data)
        })
    },[url])

    

    return (
        <div className="mt-12 mx-14 ">
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Ratting</th>
                        <th>Quantity</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                {
                    myToys.map(toy => <ShowMyToys
                       key={toy._id}
                       toy={toy}
                    ></ShowMyToys>)
                }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyToys;