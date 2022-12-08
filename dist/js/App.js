// import React from 'react'; 




let root;
root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <nav className="navbar">
        <div className="wrapper">
            <div className="navbar__nav">
                <div className="navbar__logo">

                    <a href="#"><i className="fa-regular fa-bookmark"></i></a>
                </div>
                <ul className="navbar__list">
                    <li className="navbar__link"><a href="#about">O mnie</a></li>
                    <li className="navbar__link"><a href="#projects">Projekty</a></li>
                    <li className="navbar__link"><a href="#contact">kontakt</a></li>
                </ul>

                <button className="burger-btn">
                    <div className="burger-btn__box">
                        <div className="burger-btn__inner"></div>
                    </div>
                </button>
            </div>
        </div>
        <div className="mobile-nav">
            <ul className="mobile-nav__list">
                <li className=""><a href="#about">O mnie</a></li>
                <li className=""><a href="#projects">Projekty</a></li>
                <li className=""><a href="#contact">kontakt</a></li>
            </ul>
        </div>
    </nav>
        
        
    </div>);

