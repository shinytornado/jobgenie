import React from 'react'
import './Courses.css'
import cat1 from '../../assets/cat-1.jpg'
import cat2 from '../../assets/cat-2.jpg'
import cat3 from '../../assets/cat-3.jpg'
import cat4 from '../../assets/cat-4.jpg'
import cat5 from '../../assets/cat-5.jpg'
import cat6 from '../../assets/cat-6.jpg'
import cat7 from '../../assets/cat-7.jpg'
import cat8 from '../../assets/cat-8.jpg'

const Courses = () => {
    return (
        <div className='courses'>
            <div className="courseHead">
                <h3>SUBJECTS</h3>
                <div className="courseHeadTxt">
                    <p>Explore Top Subjects</p>
                </div>
            </div>
            <div className="grid-container">
                <div className="program">
                <img src={cat1} alt="" />
                    <div className="caption">
                        <p>Web Design</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat2} alt="" />
                    <div className="caption">
                        <p>Development</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat3} alt="" />
                    <div className="caption">
                        <p>Game Design</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat4} alt="" />
                    <div className="caption">
                        <p>Apps Design</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat5} alt="" />
                    <div className="caption">
                        <p>Marketing</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat6} alt="" />
                    <div className="caption">
                        <p>Research</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat7} alt="" />
                    <div className="caption">
                        <p>Content Writing</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat8} alt="" />
                    <div className="caption">
                        <p>SEO</p>
                    </div>
                </div>
                <div className="program">
                <img src={cat1} alt="" />
                    <div className="caption">
                        <p>UI/UX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
