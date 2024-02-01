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
                        src="https://th.bing.com/th/id/R.533885405ef032cf267351c5e3291bd0?rik=rwEpvQbYAaCU0w&riu=http%3a%2f%2fiheartblr.com%2fwp-content%2fuploads%2f2016%2f11%2fstate-central-library-1024x683-2-1024x683.jpg&ehk=RCZ%2bJ7AHas3Oqp4e2z7VoPZ6Y3Jd3mbYlAh%2bwWrme3I%3d&risl=&pid=ImgRaw&r=0"
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
