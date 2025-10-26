import React from 'react';
import logo from "../images/icons/logo-sm.png";
import search from "../images/icons/search-icon-sm.png";
import  cart from "../images/icons/cart-sm.png";
const Header = () => {
    return (
        <div>

            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="#">
                            <img src={logo} alt="Logo" />
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/mac/" target="_blank" rel="noopener noreferrer">Mac</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/iphone/" target="_blank" rel="noopener noreferrer">iPhone</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/ipad/" target="_blank" rel="noopener noreferrer">iPad</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/watch/" target="_blank" rel="noopener noreferrer">Watch</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/tv/" target="_blank" rel="noopener noreferrer">TV</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer">Music</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://support.apple.com/" target="_blank" rel="noopener noreferrer">Support</a></li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/search/">
                                        <img src={search} alt="Search" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/cart/">
                                        <img src={cart} alt="Cart" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
   
    );
}


export default Header;

