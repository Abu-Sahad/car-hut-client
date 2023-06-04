import { Link, useLoaderData } from "react-router-dom";
import img from '../../../src/assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutPage = () => {

    const singleItems = useLoaderData()
    const { _id, title, price, img } = singleItems
    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const number = form.number.value;
        const message = form.message.value;
        const date = form.date.value;

        const order = {
            customerName: name,
            email,
            number,
            message,
            img,
            date,
            service: title,
            service_id: _id,
            price: price


        }
        console.log(order);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                if (data?.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Service Book Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset()
                console.log(data)
            })

    }


    return (
        <div>

            <div className="">
                <div className="hero" style={{ backgroundImage: `url(${img})`, height: "300px" }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-neutral-content ">
                        <h1 className="mb-5 text-5xl font-bold text-white">Checkout Page</h1>
                        <Link to='/'><button className="btn bg-[#FF3811] text-white">Home</button></Link>
                    </div>
                </div>


            </div>

            <h1 className="text-4xl font-bold text-center mt-6 mb-2">{singleItems.title}</h1>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-[#F3F3F3] rounded-xl mt-10 mb-10">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customer Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Date" name="date" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Phone Number" name="number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name="email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due</span>
                                </label>
                                <input type="text" placeholder="Amount" name="price" defaultValue={singleItems.price} className="input input-bordered" />
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered h-24"></textarea>
                            </div>
                            <div className="form-control col-span-2">
                                <button className="btn bg-[#FF3811] text-white w-full">Order Confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default CheckoutPage;