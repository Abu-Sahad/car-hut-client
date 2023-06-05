import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";
import { key } from "localforage";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user && user.email) {
            const url = `http://localhost:5000/booking?email=${user.email}`;
            fetch(url)
                .then((res) => res.json())
                .then((data) => setBookings(data))
                .catch((error) => {
                    console.error("Error fetching bookings:", error);
                    setError(error);
                });
        }
    }, [user]);
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/booking/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => {
                            if (res.status === 200) {
                                return res.json();
                            } else {
                                throw new Error('Failed to delete the booking');
                            }
                        })
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your coffee has been deleted.',
                                    'success'
                                );
                                const remaining = bookings.filter(booking => booking._id !== id)
                                setBookings(remaining)
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            Swal.fire(
                                'Error',
                                'Failed to delete the booking',
                                'error'
                            );
                        });
                }
            });
    };

    const handleUpdate = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'pending' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'pending'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }




    return (
        <div>
            <h1 className="text-4xl text-amber-400 text-center mt-10 mb-10">
                Your Bookings: {bookings?.length}
            </h1>

            <div className="mb-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>date</th>
                                <th>Statius</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => < BookingCard
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></BookingCard>)
                            }



                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    );
};

export default Bookings;
