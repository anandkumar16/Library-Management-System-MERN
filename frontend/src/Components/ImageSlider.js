import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://kyorinsya.com/wp-content/uploads/2020/01/Library-aisle-with-wooden-shelves-and-hundreds-of-books-539673956-hd.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://www.iesonline.co.in/colleges-image/bmsit-bangalore.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.cardiff.ac.uk/__data/assets/image/0005/68783/Books-modern-lang.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
