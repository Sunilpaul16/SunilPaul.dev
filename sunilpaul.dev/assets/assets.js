
import ic_menu_white from './ic_menu_white.png'
import ic_menu_black from './ic_menu_black.png'
import ic_close_white from './ic_close_white.png'
import ic_close_black from './ic_close_black.png'
import hero_img from './hero_img.png'
import about_img from './about_img.png'

import ic_code_dark from './ic_code_dark.png'
import ic_edu_dark from './ic_edu_dark.png'
import ic_project_dark from './ic_project_dark.png'
import ic_code_white from './ic_code_white.png'
import ic_edu_white from './ic_edu_white.png'
import ic_project_white from './ic_project_white.png'
import ic_figma from './ic_figma.png'
import ic_git from './ic_git.png'
import ic_postman from './ic_postman.png'
import ic_vscode from './ic_vscode.png'
import project_1 from '../public/project_1.png'
import project_2 from '../public/project_2.png'
import project_3 from '../public/project_3.png'

import ic_gmail from './ic_gmail.png'
import ic_github from './ic_github.png'
import ic_github_white from './ic_github_white.png'
import ic_linkedin from './ic_linkedin.png'

export const assets = {
    ic_menu_white,
    ic_menu_black,
    ic_close_white,
    ic_close_black,
    hero_img,
    about_img,
    ic_code_dark,
    ic_edu_dark,
    ic_project_dark,
    ic_code_white,
    ic_edu_white,
    ic_project_white,
    ic_figma,
    ic_git,
    ic_postman,
    ic_vscode,
    project_1,
    project_2,
    project_3,
    ic_gmail,
    ic_linkedin,
    ic_github,
    ic_github_white,
}

export const infoList = [
    { icon: assets.ic_project_white, iconDark: assets.ic_project_dark, title: 'Projects', description: 'Developed over 3 projects specializing in React.js, React Native and Next.js' },
    { icon: assets.ic_code_white, iconDark: assets.ic_code_dark, title: 'Tools I use', description: 'VSCode, Git, Github, Postman, DBeaver, Notion, Figma' },
]


export const projectList = [
    { project: assets.project_1, title: 'Hop', description: 'Hop is an innovative web application designed to elevate collaborative experiences. With its flagship feature, Shareable Browsers, users can seamlessly host watch parties, collaborate on projects, or browse together in real time, redefining the way we connect online.The app focuses on creating a fluid, interactive environment where users can share ideas, content, and experiences without the hassle of switching between platforms. Its design ensures a smooth and intuitive experience, fostering meaningful collaboration and communication.', language: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Socket.io','WebRTC'],  },

    { project: assets.project_2, title: 'Trace', description: ' Trace is a versatile mobile application designed to centralize and organize users virtual activities, including books, games, movies, and TV shows. By keeping all these interests in one place, Trace offers a streamlined and efficient way for users to track their progress and manage their hobbies across various mediums The app prioritizes user convenience, providing an intuitive interface that makes it easy to monitor activities, stay organized, and discover new interests without juggling multiple platforms.', language: ['React Native', 'TailwindCSS', 'Expo', 'MongoDB'],  },

    { project: assets.project_3, title: 'PawGang', description: 'PawGang is a mobile application tailored for dog owners to foster community and convenience. The app allows users to effortlesslyschedule dog park visits and organize playdates for their furrycompanions, providing for both pets and their owners.With its intuitive design and user-friendly features, PawGangstreamlines the process of connecting with other dog lovers,creating opportunities for pets to socialize and build their own"gangs."', language: ['React Native ', 'TypeScript', 'Jest', 'MongoDB', 'Google Maps API'],  },
]

export const socialList = [
    { icon: assets.ic_gmail, link: "Sunilpaul16@gmail.com", title: 'Sunilpaul16@gmail.com' },
    { icon: assets.ic_github_white, link: "https://github.com/Sunilpaul16", title: 'Sunilpaul16' },
    { icon: assets.ic_linkedin, link: "https://www.linkedin.com/in/sunilpaul16/", title: 'Sunilpaul16' },
,
]

export const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 90},
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 90},
    { name: "Material-UI", level: 90 },
    { name: "Bootstrap", level: 90 },
    { name: "Git & GitHub", level: 90 },
];

export const fields = [
    { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'e.g. Sunil Paul' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'e.g. Sunilpaul16@gmail.com' },
    { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Your message' },
];
