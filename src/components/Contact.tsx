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
                        href="mailto:211395231+nhmdev03@users.noreply.github.com"
                        className="contact__mail"
                    >
                        211395231+nhmdev03@users.noreply.github.com
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
