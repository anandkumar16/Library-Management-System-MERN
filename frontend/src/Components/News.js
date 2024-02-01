import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>New Updates</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Articles/Blogs</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Articles-1</p>
                            
                        </div>
                        <div className='news-competition-event'>
                            <p>Articles-2</p>
                            
                        </div>
                        <div className='news-competition-event'>
                            <p>Articles-3</p>      
                            <p>Budget Highlights 2024: Union Finance Minister Nirmala Sitharaman today presented the Interim Budget 2024.</p>
    
                        </div>
                        <div className='news-competition-event'>
                            <p>Blog-1</p>
                            
                        </div>
                        <div className='news-competition-event'>
                            <p>Blog-2</p>
                            <p>Even if you‘re not sure what a blog is, you’ve no doubt come across one at some point in time.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Notes For you</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Engineering-Physics</p>
                            
                        </div>
                        <div className='news-quiz-event'>
                            <p>Engineering-chemistry</p>
                            
                        </div>
                        <div className='news-quiz-event'>
                            <p>Engineering-Maths</p>
                            
                        </div>
                        <div className='news-quiz-event'>
                            <p>DSA Programming </p>
                           
                        </div>
                        <div className='news-quiz-event'>
                            <p>Machine Learning</p>
                           
                        </div>
                        <div className='news-quiz-event'>
                            <p>Android Development</p>
                            <p>In detail by Dr. M C Jain analysising with indepth core knowledge about
                                industry.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
