import { useEffect } from 'react';
import { frontend } from './../../data';
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
			<div className='skills-container'>
				{frontend.map((skill) => (
					<div key={skill.id} className='skill-name-experience'>
						<div className='skill-div'>
							<HiOutlineBadgeCheck className='skills__details-icon' />
							<div className='skill-name'>{skill.skill}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
