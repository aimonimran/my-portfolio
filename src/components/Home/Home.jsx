import './home.css';
import CV from '../../assets/AimonImran-ReactDeveloper.pdf';
import clipart from '../../assets/hey.png';
import { AiOutlineDown } from 'react-icons/ai';
import { socials } from '../../data';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='info-container-left'>
				<div className='socials'>
					{socials.map((social) => (
						<a
							href={social.link}
							key={social.id}
							target='_blank'
							title={social.title}
							rel='noreferrer'
						>
							{social.icon}
						</a>
					))}
				</div>
				<div className='info'>
					<h1 className='name'>Aimon Imran</h1>
					<h4 className='about-me'>
						I'm a React developer and a Computer Science student, constantly looking for new
						opportunities to expand my skill set.
					</h4>
				</div>
				<div className='cta'>
					<a href={CV} className='btn' download>
						Download CV
					</a>
					<a href='#contact' className='btn'>
						GET IN TOUCH
					</a>
				</div>
				<div className='scroll'>
					<a href='#about'>
						<AiOutlineDown />
					</a>
				</div>
			</div>
			<div className='info-container-right'>
				<img className='clipart' src={clipart} alt='' />
			</div>
		</div>
	);
};

export default Home;
