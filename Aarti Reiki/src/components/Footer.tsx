import footer from '../assets/Footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faInstagram, faFacebook }  from "@fortawesome/free-brands-svg-icons";


export default function Footer() {

return(
    <div className="footer_image -full h-[40vh] opacity-80 flex flex-col items-center justify-center">
        <img src={footer} alt="Logo" className='w-20 h-20 mx-3 rounded-lg opacity-70'/>
        <div className="flex gap-4 my-3">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        </div>
        <p>emailaddress@email.com</p>
    </div>
)
}
