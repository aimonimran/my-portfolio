import './projects.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import { projects } from '../../data';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<div id='work'>
			<div>
				<h1 data-aos='fade-up' className='my-work'>
					My projects
				</h1>
				{projects.map((project) => (
					<div key={project.id}>
						<div className='project-one'>
							<h1 className='project-number'>00{project.id}</h1>

							<hr />
							<div className='marquee'>
								<div>{project.marquee}</div>
							</div>
							<hr />

							<div data-aos='zoom-in' className='project-container'>
								<div className='info-container'>
									<div className='content'>
										<h1 className='project-title'>{project.title}</h1>
										<p className='project-concept'>
											<p>{project.desc}</p>
											<p>{project.technicalDesc}</p>
											<p>{project.updateDesc}</p>
											<p style={{ textTransform: 'uppercase' }}>{project.note}</p>
										</p>
										<div>
											<h2 className='tech-used'>Technologies Used</h2>

											<div className='ul'>
												<div className='ul-one'>
													<ul>
														<li>{project.tech[0]}</li>
														<li>{project.tech[1]}</li>
														<li>{project.tech[2]}</li>
														{project.tech.length >= 4 && <li>{project.tech[3]}</li>}
														{project.tech.length >= 5 && <li>{project.tech[4]}</li>}
													</ul>
												</div>
												{project.tech.length > 5 && (
													<div className='ul-two'>
														<ul>
															<li>{project.tech[5]}</li>
															<li>{project.tech[6]}</li>
															<li>{project.tech[7]}</li>
															<li>{project.tech[8]}</li>
															<li>{project.tech[9]}</li>
														</ul>
													</div>
												)}
											</div>
										</div>
										<div className='link'>
											<div className='frontend-link'>
												<a href={project.frontend} target='_blank' rel='noreferrer'>
													<AiFillGithub /> Frontend Code
												</a>
											</div>
											{project.backend !== '' && (
												<div className='backend-link'>
													<a href={project.backend} target='_blank' rel='noreferrer'>
														<AiFillGithub /> Backend Code
													</a>
												</div>
											)}
											{project.liveDemo !== '' && (
												<div className='demo-link'>
													<a href={project.liveDemo} target='_blank' rel='noreferrer'>
														Demo
													</a>
												</div>
											)}
										</div>
									</div>
									<div className='symbol-container'>
										<BsArrowDown className='arrow' />
									</div>
								</div>
							</div>
						</div>

						{project.imageone || project.imagetwo ? (
							<div data-aos='fade-up' className='image-container'>
								<div className='blank'></div>
								<div className='project-images'>
									<img className='project-image' src={project.imageone} alt='Project' />
									{project.imagetwo !== '' && (
										<img className='project-image top-image' src={project.imagetwo} alt='Project' />
									)}
								</div>
							</div>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
