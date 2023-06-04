import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 h-[473px] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 h-[332px] rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 space-y-3 ms-7'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-6xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /><br /> The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;