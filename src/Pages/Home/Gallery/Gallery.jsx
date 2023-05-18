import img1 from '../../../assets/toys-1.jpg'
import img2 from '../../../assets/toys-2.png'
import img3 from '../../../assets/toys-3.jpg'
import img4 from '../../../assets/toys-4.jpeg'
import img5 from '../../../assets/toys-5.jpg'
import img6 from '../../../assets/toys-6.jpg'


const Gallery = () => {
    return ( 
            <div className='lg:max-w-5xl md:max-w-xl mx-auto my-28'>
                <h1 className='text-center font-bold text-5xl text-lime-500 mb-4'>Products Gallery</h1> <hr className='w-1/3 mx-auto mb-24 text-lime-500' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-8 mx-auto md:ms-0 gap-4'>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img4} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img5} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl shadow-orange-300">
                        <figure ><img src={img6} alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
    )
};

export default Gallery;