
import OwlCarousel from 'react-owl-carousel';
import { Card } from 'react-bootstrap';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Crouselcomponet = () => {

    return (

        <div className='container mt-3'>
            <h5 className='text-success'>Wisata Populer</h5>
            <OwlCarousel className='owl-theme' loop margin={10} nav center>
                <div className='item'>
                    <Card>
                        <Card.Img variant="top" src="bukit.jpg" />
                    </Card>
                </div>

                <div className='item'>
                    <Card>
                        <Card.Img variant="top" src="tangkahan.jpg" />
                        
                    </Card>
                </div>
                <div className='item'>
                <Card>
                        <Card.Img variant="top" src="azizi.jfif" />
                       
                    </Card>
                </div>
                
            </OwlCarousel>
            <br></br>
        </div>

    )
}

export default Crouselcomponet;