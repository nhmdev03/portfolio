import React from 'react';
import '../styles/Header/Header.css';
import picture from '../assets/logo.webp';

const Header: React.FC = () => {
    return (
        <header className="header" id="intro">
            <div className="header__text">
                <h1 className="header__title">
                    Bonjour, je suis{' '}
                    <span className="header__title--lightblue">
                        NHM
                    </span>
                    .
                </h1>
                <h2 className="header__subtitle">Développeur informatique</h2>
                <h3 className="header__intro">
                    Je suis programmeur autodidacte, technophile et passionné
                    d'open source.
                </h3>
            </div>
            <img
                src={picture}
                alt="Logo de NHM"
                className="header__picture"
            />
        </header>
    );
};

export default Header;
