const BookingCard = ({ booking }) => {
    const { _id, message, img, date, price } = booking
    const handleDelete = (_id) => {
        console.log('deleted', _id)
    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square bg-[black] text-white btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    {img && <div className="mask mask-squircle w-24 h-24">
                        <img src={img} />
                    </div>}
                </div>

            </td>
            <td>
                {price}

            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost bg-[#FF3811] text-white btn-xs">Pending</button>
            </th>
        </tr>
    );
};

export default BookingCard;