import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../style/contat.css';

const Contacts: React.FC = () => {
    return (
        <div className='spaceItens'>
            <Link to={`mailto:jorgemiguelaviles18122001@gmail.com`} className='styleLink'>
                <SiGmail className='styleItem' />
            </Link>
            <Link to={`https://wa.me/5511931496764`} className='styleLink'>
                <FaWhatsapp className='styleItem' />
            </Link>
            <Link to='https://www.linkedin.com/in/-auxiliar-de-desenvolvimento/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='styleLink'>
                <FaLinkedin className='styleItem' />
            </Link>
        </div>
    );
};

export default Contacts;
