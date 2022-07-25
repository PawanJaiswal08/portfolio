const greeting = {
    display: true,
    username: 'Pawankumar Jaiswal',
    title: "Hello, my name is",
    subTitle: 'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.',
    resumeLink: 'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
};

const socialMedia = {
    display: true,
	links: [
		{
			name: 'Github',
			icon: 'https://img.icons8.com/color-glass/50/000000/github.png',
			url: 'https://github.com/PawanJaiswal08'
		},
		{
			name: 'Linkedin',
			icon: 'https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-linkedin-social-media-justicon-flat-justicon.png',
			url: 'https://www.linkedin.com/in/pawankumar-jaiswal-3a220b193/'
		},
		{
			name: 'Gmail',
			icon: 'https://img.icons8.com/color/50/000000/gmail-new.png',
			url: 'mailto:pawankumarjaiswal976@gmail.com'
		},
		{
			name: 'Facebook',
			icon: 'https://img.icons8.com/color/50/000000/facebook-new.png',
			url: 'https://www.facebook.com/pawanjaiswal0843/'
		},
		{
			name: 'Instagram',
			icon: 'https://img.icons8.com/fluency/50/000000/instagram-new.png',
			url: 'https://www.instagram.com/pawan_jaiswal_08/'
		},
	],
};

const aboutMe = {
	display: true,
    title: 'About Me',
    subTitle: 'A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nextjs / Nodejs / Django and some other cool libraries and frameworks.',
	skills: [
		'⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications',
		'⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks',
		'⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean',
	],
};

const educationInfo = {
	display: true,
	schools: [
		{
			schoolName: 'Indian Institute of Information Technology, Sricity',
			logo: require('./images/iiits.png'),
			subHeader: 'B.Tech in Computer Science Engineering',
			duration: 'August 2019 - Present',
			desc: '',
			descBullets: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', ],
		},
		{
			schoolName: 'Kulbhushan Junior College',
			logo: require('./images/kulbhushan.jfif'),
			subHeader: 'XII - Science',
			duration: 'Passed Out April 2018',
			desc: '85%',
			descBullets: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		},
		{
			schoolName: 'Baliram Patil HighSchool',
			logo: require('./images/baliram.jpg'),
			subHeader: 'X',
			duration: 'Passed Out March 2016',
			desc:'98% | Ranked top 5th in SSC-2016. ',
			descBullets: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		},
	],
};

const skillsSection = {
    display: true,
    title: 'Skills & Proficiency',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',

	softwareSkills1: {
		
		languages : [
			{
				skillName: 'C / C++',
				imgSrc: 'https://img.icons8.com/color/50/000000/c-plus-plus-logo.png'
			},
			{
				skillName: 'Javascript',
				imgSrc: 'https://img.icons8.com/color/50/000000/javascript--v1.png'
			},
			{
				skillName: 'Python',
				imgSrc: 'https://img.icons8.com/color/50/000000/python--v1.png'
			},
			{
				skillName: 'Java',
				imgSrc: 'https://img.icons8.com/color/50/000000/linux.png'
			},
		],

		webDev: [
			{
				skillName: 'HTML-5',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png'
			},
			{
				skillName: 'CSS-3',
				imgSrc: 'https://img.icons8.com/color/55/000000/css3.png',
			},
			{
				skillName: 'SASS / SCSS',
				imgSrc: 'https://img.icons8.com/color/50/000000/sass.png',
			},
			{
				skillName: 'Bootstrap-5',
				imgSrc: 'https://img.icons8.com/color/50/000000/bootstrap.png',
			},
			{
				skillName: 'NodeJs',
				imgSrc: 'https://img.icons8.com/color/50/000000/nodejs.png',
			},
			{
				skillName: 'Express',
				imgSrc: 'https://img.icons8.com/cute-clipart/64/000000/e.png',
			},
			{
				skillName: 'React',
				imgSrc: 'https://img.icons8.com/plasticine/50/000000/react.png',
			},
			{
				skillName: 'Django',
				imgSrc: 'https://img.icons8.com/color/50/000000/django.png',
			},
			{
				skillName: 'NPM',
				imgSrc: 'https://img.icons8.com/color/50/000000/npm.png',
			},
			{
				skillName: 'MongoDB',
				imgSrc: 'https://img.icons8.com/color/50/000000/mongodb.png',
			},
			{
				skillName: 'My-SQL',
				imgSrc: 'https://img.icons8.com/color/50/000000/sql.png',
			},
			{
				skillName: 'Sqlite',
				imgSrc: 'https://img.icons8.com/office/50/000000/database.png',
			},
			// {
			// 	skillName: 'Firebase',
			// 	imgSrc: 'https://img.icons8.com/color/50/000000/firebase.png',
			// },
		],
		
		toolsAndPlatforms: [
			{
				skillName: 'Git',
				imgSrc: 'https://img.icons8.com/color/50/000000/git.png',
			},
			{
				skillName: 'GitHub',
				imgSrc: 'https://img.icons8.com/ios-filled/50/000000/github.png',
			},
			{
				skillName: 'Postman',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png',
			},
			{
				skillName: 'Heroku',
				imgSrc: 'https://img.icons8.com/color/50/000000/heroku.png',
			},
			{
				skillName: 'Netlify',
				imgSrc: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png',
			},
			{
				skillName: 'PythonAnyWhere',
				imgSrc: 'https://img.icons8.com/color/50/000000/python--v1.png'
			},
			{
				skillName: 'VS-Code',
				imgSrc: 'https://img.icons8.com/color/48/000000/visual-studio--v1.png'
			},
			{
				skillName: 'AWS',
				imgSrc: 'data:image/png;base64,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',
			},
			{
				skillName: 'Docker',
				imgSrc: 'https://img.icons8.com/color/50/000000/docker.png',
			},
			{
				skillName: 'Kubernetes',
				imgSrc: 'https://img.icons8.com/color/48/000000/kubernetes.png'
			},
		],
	},
};

const techStack = {
	viewSkillBars: true,
	experience: [
		{
			Stack: 'Frontend / Design',
			progressPercentage: '75%',
		},
		{
			Stack: 'Backend',
			progressPercentage: '80%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '60%',
		},
	],
};

const projects = {
	display: true,
	title: 'Projects 🏆 ',
	subtitle: 'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',
	projectCards: [
		{
			title: 'Quality Food Corner',
			subtitle: 'QFC is a food-ordering website from which you can order food items of your choice. It is a semester-long project for full-stack development course offered by IIIT Sri City under supervision of Dr. Subu Kandaswamy Sir.',
			image: require('./images/qfc.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/PawanJaiswal08/QualityFoodCorner',
				},
				{
					name: 'Project - Link',
					url: 'https://hopeful-mccarthy-367b57.netlify.app/',
				},
			],
		},
		{
			title: 'Fahrenheit',
			subtitle: 'Fahrenheit is a blogging website in which you can write different categories blogs. It is a semester-long project for full-stack development course offered by IIIT Sri City in Django.',
			image: require('./images/fahrenheit.png'),
			direction: 'right',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/PawanJaiswal08/fahrenheit',
				},
				{
					name: 'Project - Link',
					url: 'https://blog-fahrenheit.herokuapp.com/',
				},
			],
		},
		{
			title: 'IR-Book-Search-System',
			subtitle: 'Information Retrieval Book-Search-System',
			image: require('./images/ir.png'),
			direction: 'left',
			footerLink: [
				{
					name: 'Source Code',
					url: 'https://github.com/PawanJaiswal08/IR-Book-Search-System',
				},
				{
					name: 'Project - Link',
					url: '',
				},
			],
		},
	],
};

const Profile = {
    
    name: "Pawankumar Jaiswal",

    aboutme: {
        name: "Pawankumar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non."
    },

    skills: {
        heading: "My creative skills & experiences.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.",
        s1: {
            name: "HTML",
            value: "90%"
        },
        s2: {
            name: "CSS",
            value: "80%"
        },
        s3: {
            name: "JAVASCRIPT",
            value: "80%"
        },
        s4: {
            name: "CSS",
            value: "90%"
        },
        s5: {
            name: "CSS",
            value: "90%"
        },
    },

    projects: {
        
        p1: {
            name: "Q.F.C. (Quality Food Corner)",
            description:   `• Front-End : https://hopeful-mccarthy-367b57.netlify.app/
                            • Sememster Long Project
                            • A website built in MERN stack to order online food in locality
                            • Technologies Included : NodeJS, ExpressJS, ReactJS, MongoDb, HTML5, CSS3, Bootstrap5,
                            Javascript`,
            img: ""
        },
        p2: {
            name: "",
            description: "",
            img: ""
        },
        p3: {
            name: "",
            description: "",
            img: ""
        },
        p4: {
            name: "",
            description: "",
            img: ""
        },
    },

}

const contactMe = {
	display: true,
	title: 'Get in Touch 😄',
	subTitle: 'DISCUSS A PROJECT OR JUST WANT TO SAY HI ? MY INBOX IS OPEN FOR ALL .',
	contact : [
		{
			contactField: 'Name',
			value: 'Pawankumar Jaiswal',
			icon: 'https://img.icons8.com/fluency/50/000000/change-user-male.png',
		},
		{
			contactField: 'Address',
			value: 'Aurangabad, Maharashtra',
			icon: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/50/000000/external-address-user-interface-flatart-icons-flat-flatarticons.png',
		},
		{
			contactField: 'Mail',
			value: 'pawankumarjaiswal976@gmail.com',
			icon: 'https://img.icons8.com/fluency/50/000000/gmail-new.png',
		},
		{
			contactField: 'Institute Mail',
			value: 'pawankumarrajeshlal.j19@iiits.in',
			icon: 'https://img.icons8.com/color/50/000000/student-center.png',
		},
		{
			contactField: 'Mobile / WhatsApp',
			value: '+918668409520',
			icon: 'https://img.icons8.com/color/50/000000/phone.png',
		},
	],
	username: 'Pawankumar Jaiswal',
	address: 'Aurangabad, Maharashtra',
	email: 'pawankumarjaiswal976@gmail.com',
	email2: 'pawankumarjaiswal976@gmail.com',
	mobile: '+918668409520',
};


export {
    greeting,
    socialMedia,
    aboutMe,
	contactMe,
    skillsSection,
	techStack,
	educationInfo,
	projects,
    Profile,
}