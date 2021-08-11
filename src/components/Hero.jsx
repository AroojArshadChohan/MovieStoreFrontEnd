import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image1 from '../assets/img/1.jpg';
import Image2 from '../assets/img/2.jpg';
import Image3 from '../assets/img/3.jpg';

const Hero=()=>{
    return(
<Carousel>
  <Carousel.Item interval={1300}>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
      width="800"
      height="500"
    />
    <Carousel.Caption>
      <h3>LUCA</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Second slide"
      width="800"
      height="500"
    />
    <Carousel.Caption>
      <h3>F9</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide"
      width="800"
      height="500"
    />
    <Carousel.Caption>
      <h3>Sweet Tooth</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}
export default Hero;