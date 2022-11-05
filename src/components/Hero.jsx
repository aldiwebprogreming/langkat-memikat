import {Card, Image} from 'react-bootstrap';
import Menu from './Menu';
const Hero = () => {

    return (

        <div>
            <Card className='bg-success hero'>
                <Card.Body>
                    <center>
                    <Image src="logo.png" className="img-fluid logo" alt="Responsive image" />
                    <p className='label-hero text-white'>Kunjungi Wisata Langkat dengan satu genggaman smartphone</p>

                    <button className='btn btn-warning' style={{ fontWeight: 'bold' }}>REGISTER</button>
                    </center>
                </Card.Body>
            </Card>

            <Menu />
        </div>
    )
}

export default Hero;