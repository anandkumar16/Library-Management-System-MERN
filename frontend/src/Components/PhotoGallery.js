import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {   
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://source.unsplash.com/1300x1200/?algeria" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?lebanon" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?qatar" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?uae" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?kuwait" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?oman" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?turkey" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?iran" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?jordan" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?Kuwait" alt=''/>
                <img src="https://images.unsplash.com/photo-1706430201079-7ca144fbe95d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1706285528419-c8012d6e8c26?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
            </div>
        </div>
    )
}

export default PhotoGallery