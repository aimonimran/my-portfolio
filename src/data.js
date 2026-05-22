import readingroomimage from './assets/readingroom.png';
import readingroomimagetwo from './assets/readingroom-2.png';
import quizimage from './assets/quizapp.PNG';
import quizimagetwo from './assets/quizapp-2.png';
import huluclone from './assets/hulu-clone.png';
import makery from './assets/makery.png'
import makerytwo from './assets/makery-2.png'
import bubbles from './assets/bubbles.png'
import bubblestwo from './assets/bubbles-2.png'
import switchone from './assets/switch.png'
import switchtwo from './assets/switch-2.png'
import nestbox from './assets/nestbox.png'
import nestboxtwo from './assets/nestbox-2.png'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export const experience = [
	{
		id: 1,
		position: 'Front-End Developer',
		company: 'Tektronix Technology Systems LLC.',
		duration: 'September 2024 - Present',
		description: [
			'Developed responsive Visitor Management System (VMS) using React.js, Tailwind CSS and TypeScript, delivering high-performance and scalable solutions.',
			'Integrated UAE PASS authentication and secure login flows, enhancing compliance with government security standards and strengthening user data protection.',
			'Implemented hardware integrations including RFID card readers, QR code scanners, and Emirates ID readers, automating visitor verification and accelerating check-in processes.',
			'Engineered an admin panel with role-based access control (RBAC), system configurations, and privilege management, streamlining operations and improving security.',
			'Designed real-time dashboards and dynamic email templates, providing actionable insights and automating communication workflows.',
			'Collaborated with backend teams to integrate RESTful APIs and third-party services, ensuring smooth data exchange and system interoperability.',
			'Optimized performance with code-splitting, lazy loading, and reusable components, reducing load times and delivering seamless user experiences.',
		],
		tech: [
			'React.js',
			'TypeScript',
			'Tailwind CSS',
			'RESTful APIs',
			'UAE PASS',
			'Zustand',
			'React Query',
		]
	},
	{
		id: 2,
		position: 'Software Engineer',
		company: 'AppTycoons',
		duration: 'January 2023 - August 2024',
		description: [
			'Delivered responsive web and mobile applications using Next.js, React Native, and Tailwind CSS and TypeScript, enhancing performance and user experience.',
			'Developed and integrated RESTful APIs with React Query in Next.js, implementing state management with Zustand for scalable and maintainable solutions.',
			'Managed Prisma models and streamlined file storage with Cloudflare R2.',
			'Automated transactional emails with Mailgun, streamlining communication and reducing manual effort.',
			'Integrated third-party services including Stripe for payments with checkout sessions and webhooks, and Google Maps API for location-based features.',
			'Managed codebase versioning with Git/GitHub and guided junior developers through code reviews, ensuring collaboration and code quality.',
		],
		tech: [
			'Next.js',
			'React.js',
			'React Native',
			'TypeScript',
			'Tailwind CSS',
			'Prisma',
			'PostgreSQL',
			'RESTful APIs',
			'Zustand',
			'React Query',
			'Stripe API',
			'Google Maps API',
			'Cloudflare R2',
			'Mailgun',
		]
	},
	{
		id: 3,
		position: 'Junior ReactJS Developer',
		company: 'Agilelan Limited',
		duration: 'January 2022 - December 2022',
		description: [
			'Translated UI/UX wireframes into functional React.js frontend code, driving product usability and overall success.',
			'Collaborated with developers to create and enhance features, improving user satisfaction.',
			'Integrated frontend code with server-side APIs and services, ensuring smooth data flow and functionality.',
			'Implemented form handling and validations using React Hook Form and Yup, improving data accuracy and user experience.',
			'Optimized components and maintained reusable code, enhancing performance and maintainability across the application.',
		],
		tech: [
			'React.js',
			'JavaScript',
			'Tailwind CSS',
			'React Hook Form',
			'Yup',
			'Material UI',
			'styled-components',
			'CSS3',
			'HTML5',
		]
	}
]

export const projects = [
	{
		id: 1,
		marquee:
			'-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-MAKERY-',
		title: 'Makery - AI IMAGE GENERATOR',
		desc: '"Makery - AI Image Generator" is a dynamic web application that empowers users to create and purchase LoRA models, enabling the generation of AI-driven images tailored to their needs. The application is built with a focus on user experience, leveraging cutting-edge technologies like Next.js and Tailwind CSS.',
		achievements: [
			'Developed and maintained a dynamic web application, using Next.js and Tailwind CSS, ensuring responsive design and optimal performance across devices.',
			'Integrated NextAuth for secure authentication',
			'Integrated Stripe for seamless payments.',
			'Ensured robust data integrity with Prisma and streamlined file storage with Cloudflare R2.',
			'Developed and integrated APIs using React Query in a Next.js environment.',
			'Optimized data management with Zustand.',
			'Automated email notifications with Mailgun, improving communication by 20%.',
			'Built and validated complex forms with React Hook Form and Yup, streamlining user interactions and reducing form submission errors by 35%.',
			'Contributed to continuous improvement through active participation in code reviews and cross-functional collaboration.',
		],
		outcome:
			`The 'Makery' AI Image Generator boosted user engagement and revenue, with a 30% increase in purchases due to secure authentication and seamless payment 
			integration. Improved data management and storage ensured stability, while automated email notifications enhanced communication by 20%. Additionally, 
			optimized form handling reduced errors by 35%, leading to a smoother user experience and positive feedback.`,
		note: '',
		tech: ['Next.js', 'Tailwind CSS', 'Next Auth', 'Stripe API', 'React Query', 'Prisma', 'PostgreSQL', 'Cloudflare', 'Zustand', 'Mailgun', 'React Hook Form', 'Yup'],
		liveDemo: 'https://www.makery.ai',
		imageone: makery,
		imagetwo: makerytwo
	},
	{
		id: 2,
		marquee:
			'-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-NESTBOX AI-',
		title: 'NESTBOX AI',
		desc: '"NESTBOX AI" is a web application developed in close collaboration with the client, utilizing React.js and Tailwind CSS to deliver a modern and responsive user experience.',
		achievements: [
			'Successfully implemented a fully responsive design, ensuring optimal performance and usability across all devices, from desktops to mobile phones.',
			'Developed a clean and intuitive UI, resulting in increased user engagement and satisfaction.',
			'Created reusable React components, reducing development time and ensuring consistency across the application.',
			'Collaborated with backend developers to integrate RESTful APIs, ensuring smooth data flow and real-time updates.',
		],
		outcome: `The enhancements made to the 'Nestbox AI' web application resulted in significant improvements in user engagement and overall performance. The 
		responsive design and intuitive UI contributed to a marked increase in user retention, while the seamless integration with the backend ensured real-time 
		data updates, leading to higher user satisfaction. The use of scalable architecture and reusable components not only reduced maintenance costs but also positioned the application 
		for future growth and feature expansion. These efforts received positive feedback from the client, underscoring the success of the project in meeting both user 
		and business objectives.`,
		note: '',
		tech: ['React.js', 'Tailwind CSS', 'React Query'],
		imageone: nestbox,
		imagetwo: nestboxtwo
	},
	{
		id: 3,
		marquee:
			'-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-BUBBLES-',
		title: 'BUBBLES - LAUNDRY SERVICES',
		desc: `Bubbles is a mobile application designed to provide users with convenient access to laundry services. As a frontend developer, I collaborated closely with the 
		client to build a user-friendly interface using React Native. The app allows users to locate nearby laundry service providers, place orders, and track their laundry 
		in real-time. For vendors, the app offers a streamlined platform to manage orders, update service statuses, and optimize routes using integrated Google Maps API. The 
		application is designed to enhance both customer experience and vendor efficiency, ensuring a seamless and scalable solution for laundry services.`,
		achievements: [
			'Analyzed client requirements and translated them into technical specifications and design plans, ensuring alignment with project goals.',
			'Integrated Google Maps API to enhance location-based services, providing users with accurate and convenient laundry service options.',
			'Conducted comprehensive testing and debugging, reducing reported issues by 40% and ensuring optimal performance and reliability.',
			'Enhanced the performance of mobile applications, improving scalability and speed by 25%, resulting in a smoother user experience.',
			'Developed features that allow vendors to efficiently manage orders, and update service statuses leading to increased operational efficiency.'
		],
		outcome:
			`The "Bubbles" app successfully demonstrated proficiency in building a robust mobile application using modern technologies. The project also showcased the ability to deliver a polished product that significantly improved user engagement and vendor management efficiency.`,
		note: '',
		tech: ['React Native', 'Redux', 'CSS3', 'Google Maps API'],
		imageone: bubbles,
		imagetwo: bubblestwo
	},
	{
		id: 4,
		marquee:
			'-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-SWITCH-',
		title: 'SWITCH',
		desc: 'Switch is a Fintech mobile application developed for a US-based company, designed to facilitate group money collection for events. As a frontend developer, I collaborated closely with the client to build a seamless user experience using React Native. The app enables users to create and share groups, invite others, and securely collect funds for various events, ensuring a smooth and intuitive experience across devices',
		achievements: [
			' Designed and implemented a responsive and user-friendly interface, enhancing user engagement and satisfaction.',
			'Ensured consistent performance across iOS and Android platforms using Xcode simulators, addressing platform-specific challenges and optimizing the app for diverse devices.',
			' Developed efficient group management features that allow users to easily create, share, and manage groups.',
			`Utilized React Query for efficient data fetching and synchronization, providing real-time updates and improving the app's responsiveness.`,
			`Employed Sentry and New Relic for proactive monitoring and error tracking, ensuring quick resolution of issues. Conducted black box testing to validate the app’s functionality and used Jira for effective task management.`,
			'Leveraged Jira to streamline project management, track progress, and collaborate efficiently with the development team, ensuring timely delivery of features and improvements.'
		],
		outcome:
			'The "Switch" app significantly streamlined group money collection for events, leading to a high adoption rate among users. The intuitive design, secure payment integration, and proactive monitoring resulted in positive feedback and increased user retention, positioning the app as a trusted tool for managing event finances across various devices.',
		note: '',
		tech: ['React Native', 'React Query', 'CSS3', 'XCode', 'Sentry', 'New Relic', 'Black Box Testing', 'Jira'],
		frontend: '',
		backend: '',
		liveDemo: '',
		imageone: switchone,
		imagetwo: switchtwo
	},
];

export const skills = [
	{
		title: 'Frontend Technologies',
		tech: [
			'Next.js',
			'React.js',
			'React Native',
			'TypeScript',
			'JavaScript',
			'Zustand',
			'Redux',
			'Context API',
			'React Hook Form',
			'Yup',
			'React Query',
			'Tailwind CSS',
			'styled-components',
			'LESS',
			'Material UI',
			'BootStrap',
			'SCSS',
			'LESS',
			'CSS3',
			'HTML5'
		]
	},
	{
		title: 'Backend Technologies',
		tech: [
			'Node.js',
			'Prisma',
			'PostgreSQL',
			'RESTful APIs',
			'Cloudflare R2',
		]
	},
	{
		title: 'API & Payment Integration',
		tech: [
			'UAE PASS',
			'Stripe API',
			'Google Maps API',
		],
	},
	{
		title: 'Tools & Platforms',
		tech: ['Visual Studio Code', 'Figma', 'Adobe XD', 'Postman', 'Xcode', 'Asana', 'Jira', 'Slack']
	},
	{
		title: 'Other',
		tech: [
			'Version Control (Git)', 'Code Reviews', 'Agile Methodologies'
		]
	}
];

export const socials = [
	{
		id: 1,
		title: 'GitHub',
		link: 'https://github.com/aimonimran',
		icon: <AiFillGithub />
	},
	{
		id: 2,
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/aimon-imran/',
		icon: <AiFillLinkedin />
	}
];
