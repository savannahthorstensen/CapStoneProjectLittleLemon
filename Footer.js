import React from 'react';
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterraneran resturant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Adress: <br/> 12345 Lemon St, LemonTown, Chicago</li>
                        <li>Phone: <br/> +1 123 456 7891</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>FaceBook</a></li>
                        <li><a href='/'>TikTok</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
