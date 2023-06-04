import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "../BookingCard/BookingCard";
import { key } from "localforage";

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
