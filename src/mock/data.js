import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'NK Portfolio | Front-end developer',
  lang: 'en',
  description: 'Welcome to my portfolio. ',
};

// HERO DATA
export const heroData = {
  title: 'I build beautiful web experiences',
  subtitle: "I'm Nikola Kikanovic - Front End Developer",
  cta: 'Look at my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hello there, my name is Nikola and I enjoy creating things that live on the internet. I'm interested in web development and design.",
  paragraphTwo:
    'My interest in web development started back in 2018  when I decided to try creating some website with WordPress — turns out that taught me a lot about HTML & CSS & SEO practices!',
  paragraphThree:
    "Fast-forward to today I've had the privilege of working at start-up, where my job was to create 360° Virtual Tours.",
  paragraphFour: 'Now, I am growing myself as a front-end developer.',
  paragraphFive: 'My current stack of languages/technologies are:',
  resume: '/NikolaKikanovicCV.pdf', // if no resume, the button will not show up
  techSkills: [
    { icon: 'react.png', name: 'React.Js' },
    { icon: 'javascript.png', name: 'JavaScript' },
    { icon: 'html.png', name: 'HTML' },
    { icon: 'sass.png', name: 'SASS' },
    { icon: 'css.png', name: 'CSS' },
    { icon: 'github.png', name: 'Github' },
    { icon: 'npm.png', name: 'NPM' },
    { icon: 'vs-code.png', name: 'VS Code' },
    { icon: 'photoshop.png', name: 'Photoshop' },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-user-app.png',
    title: 'User App',
    info: 'CRUD User App created with React.js, Redux-toolkit, React-Router and Firebase.',
    info2: '',
    url: 'https://onionsequences.github.io/user-app/',
    repo: 'https://github.com/onionSequences/user-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-youtube-clone.png',
    title: 'Youtube Clone',
    info: 'Youtube clone with recommended videos and search option. This project was built with React, Youtube API and SCSS',
    info2: '',
    url: 'https://onionsequences.github.io/',
    repo: 'https://github.com/onionSequences/react-youtube-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-employee-dashboard.png',
    title: 'Employee Dashboard',
    info: 'Simple employee dashboard created using React, localStorage and Material-UI.',
    info2: '',
    url: 'https://onionsequences.github.io/employee-dashboard/',
    repo: 'https://github.com/onionSequences/employee-dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-food-recipes.png',
    title: 'Food Recipes',
    info: 'App for recipes search from Edamam - Recipe Search API. Created with HTML, CSS, JS and Webpack.',
    info2: '',
    url: 'https://onionsequences.github.io/js-project-recipes/',
    repo: 'https://github.com/onionSequences/js-project-recipes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-ac-milan.png',
    title: 'AC Milan squad',
    info: 'Showcase AC Milan players in random order, with random substitution on every minute.',
    info2: 'Of course squad from (2004/2005 season).',
    url: 'https://onionsequences.github.io/js-dom-football-club/',
    repo: 'https://github.com/onionSequences/js-dom-football-club', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-movie-finder.png',
    title: 'Movie Finder',
    info: 'Simple app that show list of hard-coded movies. With options to search movie from list or delete a movie.',
    info2: 'HTML, CSS, Javascript',
    url: 'https://onionsequences.github.io/movie-finder/',
    repo: 'https://github.com/onionSequences/movie-finder', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nikola.kikanovic20@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikolakikanovic/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/onionSequences',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
