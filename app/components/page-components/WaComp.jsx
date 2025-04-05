import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
const Wheader = () => {
    const phoneNumber = process.env.WANUM;

    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 9999,
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <FaWhatsapp size={38} />
        </Link>
    );
};

export default Wheader;
