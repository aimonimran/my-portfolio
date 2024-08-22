import React, { useEffect } from 'react'
import './experience.css';
import { experience } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(() => {
        Aos.init({});
    }, []);

    return (
        <div id='experience'>
            <h1 data-aos='fade-up' className='my-experience'>
                My Experience
            </h1>
            <div className='experience-detail-container'>
                {experience.map(each => (
                    <div key={each.id} className='experience-container'>
                        <div className='experience-duration'>
                            <p>{each.duration}</p>
                        </div>
                        <div className='experience-detail'>
                            <h3>{each.position} - {each.company}</h3>
                            <ul>
                                {each.description.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                            <div className='tech-container'>
                                {each.tech.map((item, idx) => (
                                    <div key={idx} className='tech-item'>
                                        <p className='tech'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default React.memo(Experience);