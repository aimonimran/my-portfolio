import { useEffect } from 'react';
import { skills } from './../../data';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import './skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<div id='skills'>
			<h1 data-aos='fade-up' className='my-skills'>
				My Skills
			</h1>
			{skills.map(skill => (
				<div className='skill-main-container'>
					<h1 className='skill-heading'>{skill.title}</h1>
					<div className='skills-container'>
						{skill.tech.map((item, idx) => (
							<div key={idx} className='skill-name-experience'>
								<div className='skill-div'>
									<HiOutlineBadgeCheck className='skills__details-icon' />
									<div className='skill-name'>{item}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
