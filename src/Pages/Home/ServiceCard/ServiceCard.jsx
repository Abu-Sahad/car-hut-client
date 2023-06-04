import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className="text-[#FF3811] text-2xl font-bold">Price:$ {price}</p>
                    <Link to={`/checkout/${_id}`}> <button> <ArrowSmallRightIcon className="h-6 w-6 text-[#FF3811]" /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;