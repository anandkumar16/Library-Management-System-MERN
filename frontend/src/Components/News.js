import React from 'react'
import './News.css'
import AddNotes from './AddNotes'

function News() {
    function addNotes(params) {
        
    }
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
                            {/* <p>Engineering-Physics</p> */}
                            <a 
                            href='https://drive.google.com/file/d/19zCHVtydybDXf5Iu1uPDD_soeHKhne3q/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >Engineering-Physics</a>
                            
                        </div>
                        <div className='news-quiz-event'>
                        <a 
                            href='https://drive.google.com/file/d/1HPfd4ND9mYYwfNpaAouYkvTKa_f8cHWv/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >Engineering-Chemistry</a>
                            
                        </div>
                        <div className='news-quiz-event'>
                        <a 
                            href='https://drive.google.com/file/d/1_hXOY6l9MRyC9anxMQpaqTDwrpRqD1um/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >Engineering-Maths</a>
                            
                        </div>
                        <div className='news-quiz-event'>
                        <a 
                            href='https://drive.google.com/file/d/1VH4XcxmSrntC-5izxuIVXdWLDX511Kc_/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >DSA Programming</a>
                           
                        </div>
                        <div className='news-quiz-event'>
                        <a 
                            href='https://drive.google.com/file/d/1ljfPWsko7E-aeRWD7La9HUycAscUg_fZ/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >Electronics and communication</a>
                           
                        </div>
                        <div className='news-quiz-event'>
                        <a 
                            href='https://drive.google.com/file/d/1ljfPWsko7E-aeRWD7La9HUycAscUg_fZ/view' 
                            target='_blanck'
                            style={{color:"black"}}
                            >App development</a>
                           
                        
                            <p>In detail by Dr. Harry analysising with indepth core knowledge about
                                industry.</p>
                        </div>
                        <div>
                        <button className='btn1'>Add Notes +</button>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
