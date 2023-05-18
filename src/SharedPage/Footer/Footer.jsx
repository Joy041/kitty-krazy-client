import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaHome, FaRegEnvelope, FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer ps-14 md:ps-10 lg:ps-24 py-10 text-white bg-sky-500">
            <div>
                <span className="footer-title">About Us</span>
                <p className="link link-hover">We offer a premium service, whether you are shopping <br /> at one of our flagship stores or via our website!</p>
                <p>
                    <button className="btn btn-circle"><FaFacebookF></FaFacebookF></button>
                    <button className="btn btn-circle mx-2"><FaInstagram></FaInstagram></button>
                    <button className="btn btn-circle me-2"><FaTwitter></FaTwitter></button>
                    <button className="btn btn-circle"><FaLinkedinIn></FaLinkedinIn></button>
                </p>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <a className="link link-hover flex items-center"><FaHome className="me-1"></FaHome> Your address goes here</a>
                <a className="link link-hover flex items-center"><FaRegEnvelope className="me-1"></FaRegEnvelope> kitty@gmail.com</a>
                <a className="link link-hover flex items-center"><FaPhone className="me-1"></FaPhone> +91548523654</a>
            </div>
            <div>
                <span className="footer-title">Information</span>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Payment Methods</a>
                <a className="link link-hover">Product Warranty</a>
                <a className="link link-hover">Return Process</a>
            </div>
            <div>
                <span className="footer-title">Subscribe for newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="md:relative">
                        <input type="text" placeholder="email" className="input input-bordered w-1/2 md:w-full pr-16" />
                        <button className="btn btn-primary block  md:absolute top-0 right-0 mt-2 md:mt-0 md:rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;