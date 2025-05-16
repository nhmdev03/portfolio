import '../styles/Contact/Contact.css';
import Loader from './Loader.tsx';

const Contact: React.FC = () => {
    return (
        <footer className="contact" id="contact">
            <h3 className="contact__title">
                Con<span className="contact__title--lightblue">tact</span>
            </h3>
            <div className="contact__mail__and__phone">
                <div className="contact__mail">
                    <i className="fa-solid fa-envelope"></i>
                    <a
                        href="mailto:nhmdev03@gmail.com"
                        className="contact__mail"
                    >
                        nhmdev03@gmail.com
                    </a>
                </div>
                <div className="contact__phone">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:+" className="contact__number">
                        06 33 10 13 63
                    </a>
                </div>
            </div>

            <Loader />

            <div className="contact__social">
                <a
                    href="https://github.com/nhmdev03"
                    className="contact__github"
                >
                    <span>Github</span>
                    <i className="fa-brands fa-github" title="Github"></i>
                </a>
            </div>
        </footer>
    );
};

export default Contact;
