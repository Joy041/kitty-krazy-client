import { Link } from 'react-router-dom'
import img1 from '../../../assets/toys-1.jpg'
import img2 from '../../../assets/toys-2.png'
import img3 from '../../../assets/toys-3.jpg'
import img4 from '../../../assets/toys-4.jpeg'
import img5 from '../../../assets/toys-5.jpg'
import img6 from '../../../assets/toys-6.jpg'


const Gallery = () => {
    return (
        <div className='lg:max-w-7xl md:max-w-full mx-auto my-28'>
            <h1 className='text-center font-bold text-5xl text-lime-500 mb-20'>Products Gallery</h1>
            <div className='flex flex-col gap-4 md:flex-row items-center justify-center mx-4'>
                <div className="card w-96 bg-base-100 shadow-xl shadow-orange-300" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <Link to={'allToy'}><figure ><img src={img1} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card w-96 mx-2 bg-base-100 shadow-xl shadow-orange-300">
                    <Link to={'allToy'}><figure ><img src={img2} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card w-96 bg-base-100 shadow-xl shadow-orange-300">
                    <Link to={'allToy'}><figure ><img src={img3} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card w-96 mx-2 bg-base-100 shadow-xl shadow-orange-300">
                    <Link to={'allToy'}> <figure ><img src={img4} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card w-96 me-2 bg-base-100 shadow-xl shadow-orange-300">
                    <Link to={'allToy'}><figure ><img src={img5} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
                <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="card w-96 bg-base-100 shadow-xl shadow-orange-300">
                    <Link to={'allToy'}><figure ><img src={img6} className='rounded-xl' alt="Shoes" /></figure></Link>
                </div>
            </div>
        </div>
    )
};

export default Gallery;

// className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-8 mx-auto md:ms-0 gap-4'