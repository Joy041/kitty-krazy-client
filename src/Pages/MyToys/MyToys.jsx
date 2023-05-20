import ShowMyToys from "../../MapPage/ShowMyToys/ShowMyToys";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


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

    const deleteBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kitty-krazy-server.vercel.app/allProducts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Toys information has been deleted.',
                                'success'
                            )
                        }
                        const remaining = myToys.filter(toy => toy._id !== id)
                        setMyToys(remaining)
                    })
            }
        })
    }

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
                       deleteBtn={deleteBtn}
                    ></ShowMyToys>)
                }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyToys;