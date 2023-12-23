import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-900 text-white">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div>
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="text-white label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn btn-error text-white cursor-pointer join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                    <ul className="flex text-3xl gap-8 mt-3 cursor-pointer">
                        <li><a href="https://www.facebook.com"><FaFacebook/></a></li>
                        <li><a href="https://www.instagram.com"><FaInstagram/></a></li>
                        <li><a href="https://twitter.com/?partner=opera15-other"><FaTwitter/></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;