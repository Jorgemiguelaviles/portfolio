import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../style/contat.css'

const Contacts: React.FC = () => {
    return (
        <div className='spaceItens' >
            <Link to='' className='styleLink'>
                <SiGmail className='styleItem'/>
            </Link>
            <Link to='' className='styleLink'>
                <FaWhatsapp className='styleItem'/>
            </Link>
            <Link to='' className='styleLink'>
                <FaLinkedin className='styleItem'/>
            </Link>
        </div>
    );
};


export default Contacts;
