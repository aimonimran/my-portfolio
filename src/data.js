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
			'Collaborated with cross-functional teams to translate designs into high-quality code using React.js, TypeScript, and Tailwind CSS.',
			'Optimized applications for maximum speed and scalability.',
			'Participated in code reviews and provided constructive feedback.',
			'Wrote clean, maintainable, and well-documented code.',
			'Maintained a 95% client satisfaction rate through tailored solutions and effective communication.',
			'Streamlined development processes by managing the codebase with Git.',
		],
		tech: [
			'React.js',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'RESTful APIs',
			'Zustand',
			'React Query',
			'React Hooks',
			'Bootstrap',
			'Prettier',
		]
	},
	{
		id: 2,
		position: 'Software Engineer',
		company: 'AppTycoons',
		duration: 'January 2023 - August 2024',
		description: [
			'Delivered and maintained high-performance web and mobile applications, ensuring responsive design, and boosting user engagement by 30%.',
			'Managed Prisma models to update and maintain the database schema.',
			'Optimized frontend-backend integration by developing and implementing efficient APIs, reducing load times by 25% and enhancing overall application performance.',
			'Exceeded client expectations by delivering tailored solutions and maintaining a 95% client satisfaction rate through effective communication and problem-solving.',
			'Enhanced application speed, responsiveness, and scalability through efficient coding practices.',
			'Guided junior developers through code reviews, ensuring code quality and consistency.',
			'Streamlined development processes by effectively managing the codebase with Git, reducing deployment time by 20%.',
		],
		tech: [
			'Next.js',
			'React.js',
			'React Native',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'Prisma',
			'PostgreSQL',
			'RESTful APIs',
			'Zustand',
			'React Query',
			'React Hooks',
			'Redux',
			'Stripe API',
			'Material UI',
			'Black Box Testing',
			'New Relic',
			'Xcode',
			'Prettier',
			'Bootstrap',
			'Jira',
			'LESS',
			'Sentry'
		]
	},
	{
		id: 3,
		position: 'ReactJS Developer',
		company: 'Design Henge',
		duration: 'November 2022 - December 2022',
		description: [
			'Translated intricate wireframes and mockups into pixel-perfect and interactive interfaces, improving UI consistency.',
			'Created a reusable component library to accelerate development, reducing development time for new features by 40%.'
		],
		tech: [
			'Next.js',
			'React.js',
			'Tailwind CSS',
			'JavaScript'
		]
	},
	{
		id: 4,
		position: 'Junior React Developer',
		company: 'Agilelan Limited',
		duration: 'January 2022 - October 2022',
		description: [
			'Contributed to product success by translating UI/UX wireframes into functional frontend code.',
			'Worked closely with other developers to create new features and enhance existing features.',
			'Collaborated effectively with development teams to deliver new features and enhance existing features, improving user satisfaction by 25%.',
			'Worked with back-end developers to integrate front-end code with server-side APIs and services.',
			'Optimized web application performance through code optimization techniques, resulting in a 30% increase in page load speed.',
		],
		tech: [
			'React.js',
			'React Native',
			'JavaScript',
			'Tailwind CSS',
			'Material UI',
			'styled-components',
			'CSS3',
			'HTML5',
			'Xcode'
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
	{
		id: 5,
		marquee:
			'-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE-HULU CLONE',
		title: 'Hulu Clone',
		desc: 'Developed a clone of the popular video streaming platform Hulu. Utilized a range of technologies to create a responsive web application.',
		achievements: [
			'Created a responsive UI and smooth user experience.',
			'Implemented a RESTful API to support interactions between frontend and backend.',
			'Deployed the application to Netlify.'
		],
		outcome:
			'The project demonstrated proficiency in building a web application using modern technologies. The project also showcased an ability to deliver a polished product.',
		note: '',
		tech: ['Next.js', 'React.js', 'Tailwind CSS'],
		// frontend: 'https://github.com/aimonimran/hulu-clone',
		liveDemo: 'https://640cee37740f1a629d738a52--velvety-seahorse-62c593.netlify.app/',
		imageone: huluclone,
	},


	// {
	// 	id: 2,
	// 	marquee:
	// 		'-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE-NEXTJS LANDING PAGE',
	// 	title: 'Next.js Landing Page',
	// 	desc: 'Developed a responsive landing page using the Next.js framework. Utilized the latest web technologies and design principles to create an engaging and modern user experience.',
	// 	achievements: [
	// 		'Built a landing page with a responsive design that is optimized for various devices and screen sizes.',
	// 		'Utilized Next.js server-side rendering to improve page load times and SEO performance.',
	// 		'Used the image component of Next.js to optimize images on the landing page for faster load times and improved user experience.',
	// 		'Deployed the landing page to Netlify.'
	// 	],
	// 	outcome:
	// 		'The project demonstrated proficiency in developing a modern, responsive landing page using Next.js and other web technologies. The project also showcased an ability to follow best practices in web design and development, ensuring a positive user experience. Additionally, using the image feature.',
	// 	note: '',
	// 	tech: ['Next.js', 'Tailwind CSS', 'JavaScript (ES6)'],
	// 	frontend: 'https://github.com/aimonimran/nextjs-landing-page',
	// 	backend: '',
	// 	liveDemo: 'https://main--joyful-phoenix-8bb0b4.netlify.app/',
	// 	imageone: landingpage,
	// 	imagetwo: landingpagetwo
	// },
	// {
	// 	id: 3,
	// 	marquee:
	// 		'-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION-E BLOOD BANK APPLICATION',
	// 	title: 'E Blood Bank',
	// 	desc: 'Developed an e-blood bank application that allows users to search for blood donors using React.js and Firebase authentication. Utilized Material UI to implement a modern user interface.',
	// 	achievements: [
	// 		'Implemented user authentication using Firebase Authentication to ensure secure user experience.',
	// 		'Developed a modern user interface using Material UI.',
	// 		'Implemented search functionality to allow users to search for donors based on blood group.'
	// 	],
	// 	outcome:
	// 		'The project demonstrated proficiency in developing a modern web application using React.js and Material UI, and utilizing Firebase for backend services such as authentication, database, and storage. The project also showcased an ability to follow best practices in web development.',
	// 	note: '',
	// 	tech: ['React.js', 'JavaScript (ES6)', 'CSS3', 'Material UI', 'HTML5'],
	// 	frontend: 'https://github.com/aimonimran/e-blood-bank',
	// 	backend: '',
	// 	liveDemo: '',
	// 	imageone: '',
	// 	imagetwo: ''
	// },
	{
		id: 4,
		marquee:
			'-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM-READING ROOM',
		title: 'Reading Room',
		desc: 'Developed a reading and writing website that allows users to search for books, read stories, write their own stories, and publish them in real-time using React.js, Node.js, Mongoose, and Axios. Integrated Google API to fetch book data and cover images.',
		achievements: [
			'Integrated Google API to fetch book data and cover images for search results and book details pages.',
			'Implemented user authentication and authorization using Node.js and Mongoose, allowing users to create accounts, write their own stories, and publish them in real-time.',
			'Used React.js to build a modern and responsive user interface that is optimized for various devices and screen sizes.',
			'Utilized Node.js and MongoDB with Mongoose to store and retrieve user and story data, enabling efficient and scalable data management.',
			'Deployed the application to Netlify.'
		],
		outcome:
			'The project demonstrated proficiency in developing a modern and responsive web application using React.js, Node.js, and Mongoose, and utilizing Google API for book data and cover images. The project also showcased an ability to follow best practices in web development. Additionally, the feature to allow users to write and publish their own stories in real-time showed proficiency in building real-time applications using Node.js.',
		note: '*Note: Only frontend of the application has been deployed. Therefore, you cannot access the components that are accessed after registering.*',
		tech: [
			'React.js',
			'JavaScript (ES6)',
			'CSS3',
			'HTML5',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Mongoose',
			'Axios',
			'Google API'
		],
		// frontend: 'https://github.com/aimonimran/reading-room',
		// backend: 'https://github.com/aimonimran/reading-room-backend',
		liveDemo: 'https://astounding-tarsier-da1205.netlify.app/',
		imageone: readingroomimage,
		imagetwo: readingroomimagetwo
	},
	// {
	// 	id: 5,
	// 	marquee:
	// 		'-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-DONE WITH IT-',
	// 	title: 'Done With It',
	// 	desc: "Developed a mobile application called 'Done with it' using React Native and CSS3. The application enables users to sell products they no longer need by posting listings and communicating with potential buyers.",
	// 	achievements: [
	// 		'Successfully developed a mobile application that enables users to sell products they no longer need using React Native and CSS3. ',
	// 		'Integrated push notifications.'
	// 	],
	// 	outcome:
	// 		'Demonstrated proficiency in developing a mobile application using React Native and CSS3. Enabled users to sell products they no longer need by posting listings and communicating with potential buyers. Improved the user experience by integrating push notifications.',
	// 	note: '',
	// 	tech: ['React Native', 'CSS3', 'JavaScript (ES6)'],
	// 	// frontend: 'https://github.com/aimonimran/DoneWithIt',
	// },
	// {
	// 	id: 6,
	// 	marquee:
	// 		'-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APPTO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-TO DO APP-',
	// 	title: 'To-Do App',
	// 	desc: 'Developed a to-do app using React.js and CSS3. The application enables users to create a to-do list by adding, editing, and deleting tasks',
	// 	achievements: [
	// 		'Successfully developed a to-do app using React.js and CSS3.',
	// 		'Implemented key functionalities such as adding, editing, and deleting tasks.',
	// 		'Demonstrated proficiency in React.js and CSS3.'
	// 	],
	// 	outcome:
	// 		'Demonstrated proficiency in developing a to-do app using React.js and CSS3. Improved the user experience by implementing key functionalities. Achieved a fully functional to-do app with capabilities such as adding, editing, and deleting tasks.',
	// 	note: '',
	// 	tech: ['React.js', 'CSS3', 'JavaScript (ES6)', 'HTML5'],
	// 	frontend: 'https://github.com/aimonimran/todo-app',
	// 	backend: '',
	// 	liveDemo: 'https://resilient-capybara-ce7b86.netlify.app',
	// 	imageone: todoimage,
	// 	imagetwo: ''
	// },
	// {
	// 	id: 7,
	// 	marquee:
	// 		'-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-TS TO DO APP-',
	// 	title: 'To Do App (TypeScript)',
	// 	desc: 'Developed a to-do app using TypeScript and CSS3. The application enables users to create a to-do list by adding, editing, and deleting tasks',
	// 	achievements: [
	// 		'Successfully developed a to-do app using TypeScript and CSS3.',
	// 		'Implemented key functionalities such as adding, editing, and deleting tasks.',
	// 		'Demonstrated proficiency in TypeScript and CSS3.'
	// 	],
	// 	outcome:
	// 		'Demonstrated proficiency in developing a to-do app using TypeScript and CSS3. Improved the user experience by implementing key functionalities. Achieved a fully functional to-do app with capabilities such as adding, editing, and deleting tasks.',
	// 	note: '',
	// 	tech: ['TypeScript', 'CSS3', 'JavaScript (ES6)', 'HTML5'],
	// 	frontend: 'https://github.com/aimonimran/ts-todo-app',
	// 	backend: '',
	// 	liveDemo: '',
	// 	imageone: '',
	// 	imagetwo: ''
	// }
	{
		id: 7,
		marquee:
			'-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-QUIZ APP-',
		title: 'Quiz App',
		desc: 'Developed a quiz app using React.js and CSS3. The application enables users to undertake a series of questions with four options to choose from. The app is user-friendly and the user shall find it extremely easy to answer questions. At the end of the quiz, a result-report is generated which states the score.',
		achievements: [
			'Successfully developed a quiz app using React.js and CSS3.',
			'Implemented key functionalities such as Home Screen of the application where the user is required to enter his/her name, questions with four options to choose from, current score after answering each question, and blinking of selected option.',
			'Generated a result report at the end of the quiz stating the score, improving the overall user experience.',
			'Demonstrated proficiency in React.js and CSS3.'
		],
		outcome:
			'Demonstrated proficiency in developing a quiz app using React.js and CSS3. Improved the user experience by implementing key functionalities such as a Home Screen and a result report stating the score. Achieved a fully functional quiz app that is user-friendly and enables users to undertake a series of questions with four options to choose from.',
		note: '',
		tech: ['React.js', 'JavaScript (ES6)', 'CSS3', 'HTML5'],
		// frontend: 'https://github.com/aimonimran/quiz-app',
		liveDemo: 'https://comfy-taffy-ca418c.netlify.app/',
		imageone: quizimagetwo,
		imagetwo: quizimage
	},
	// {
	// 	id: 8,
	// 	marquee:
	// 		'-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-ECOMMERCE APP-',
	// 	title: 'Ecommerce App',
	// 	desc: "This ecommerce application facilitates the buyer's journey, deliver a great user experience, and ensure that making a purchase is smooth and easy.",
	// 	technicalDesc:
	// 		'The logging in and signup process is made smooth and secure by implementing JSON Web Token. User friendly product filtering and sorting is implemented. Shopping cart provides summary of selected items. Secure and in-app payment is implemented. Checking the shipping status provides ease to the users.',
	// 	updateDesc:
	// 		"Currently, Ecommerce app is not live, although it is in its initial stages. The application's drafts are provided here. Please check out the GitHub repository to keep up with the development of the app.",
	// 	note: '',
	// 	tech: [
	// 		'HTML5',
	// 		'CSS3 (Styled-Components)',
	// 		'JavaScript (ES6)',
	// 		'React.js',
	// 		'Node.js',
	// 		'Express.js',
	// 		'MongoDB',
	// 		'Mongoose',
	// 		'Axios',
	// 		'JSON Web Token'
	// 	],
	// 	frontend: 'https://github.com/aimonimran/ecommerce',
	// 	backend: 'https://github.com/aimonimran/ecommerce-api',
	// 	liveDemo: '',
	// 	imageone: ecommerceimage,
	// 	imagetwo: ecommerceimagetwo
	// }
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
			'Tailwind CSS',
			'styled-components',
			'Material UI',
			'BootStrap',
			'SCSS',
			'Ant Design',
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
		]
	},
	{
		title: 'Tools & Platforms',
		tech: ['GitHub', 'Visual Studio Code', 'Postman', 'XCode', 'TestFlight', 'Asana', 'Jira', 'Slack']
	},
	{
		title: 'API and Payment Integration',
		tech: [
			'Stripe API',
			'Google Maps API'
		],
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
