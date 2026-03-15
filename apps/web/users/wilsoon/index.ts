import { Resume } from '../../types'
import {
   faLinkedin,
   faGithub,
   faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { SKILLS } from './SKILLS'
import { LOCATIONS } from './LOCATIONS'
import { LANGUAGES } from './LANGUAGES'
import { EXPERIENCES } from './EXPERIENCES'
import { EDUCATIONS } from './EDUCATIONS'
import { PROJECTS } from './PROJECTS'
import { CONTRIBUTIONS } from './CONTRIBUTIONS'
import { CERTIFICATIONS } from './CERTIFICATIONS'

export const RESUME: Resume = {
   firstName: 'Wilson',
   lastName: 'Oon',
   name: 'Wilson Oon',
   nick: 'wilsoon',
   gender: 'male',
   nameLink: 'https://www.linkedin.com/in/wilsonoon7172',
   initials: 'WO',
   initialsLink: 'https://www.linkedin.com/in/wilsonoon7172',
   locations: LOCATIONS,
   languages: LANGUAGES,
   avatar: '/me.png',
   avatarLink: 'https://www.linkedin.com/in/wilsonoon7172',
   summary: 'Full-Stack Developer & Freelance Consultant',
   summaryLink: 'https://www.linkedin.com/in/wilsonoon7172',
   about: [
      {
         description:
            '**Full-Stack Developer** and **Freelance Consultant** specialising in modern web architectures and cloud-native infrastructure. Expert in building responsive frontends with Next.js, integrated with backend systems using Python and Node.js. Advanced proficiency in edge computing and serverless deployments, leveraging Cloudflare Workers and Vercel to optimise global performance. Proven experience in implementing security-first designs, including zero-knowledge architectures. Experienced in managing the full software development lifecycle (SDLC), from UI/UX prototyping to deploying and monitoring live production environments for diverse business clients.',
      },
      {
         title: 'Competencies',
         items: [
            'Software Development Life Cycle (SDLC)',
            'Algorithms & Data Structures',
            'Full-Stack Web Development',
            'Database Management (SQL/NoSQL)',
            'Object-Oriented Programming (OOP)',
            'Version Control (Git)',
            'Technical Writing & Documentation',
            'Unit Testing & Debugging',
            'UI Responsive Design',
         ],
      },
   ],
   aboutLink: 'https://www.linkedin.com/in/wilsonoon7172',

   website: 'https://wilsoon.dev',

   contact: {
      website: 'https://wilsoon.dev',
      email: 'hello@wilsoon.dev',
      phone: '+65 8400 3195',
      cv: 'https://wilsoon.dev/cv.pdf',
      resume: 'https://wilsoon.dev/cv.pdf',
      linkedin: 'https://www.linkedin.com/in/wilsonoon7172',
      github: 'https://github.com/Wilsoon7721',
      telegram: 'https://t.me/Calorious',
      socials: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/wilsonoon7172',
            icon: faLinkedin,
         },
         {
            name: 'Github',
            url: 'https://github.com/Wilsoon7721',
            icon: faGithub,
         },
         {
            name: 'Telegram',
            url: 'https://t.me/Calorious',
            icon: faTelegram,
         },
      ],
   },

   experiences: EXPERIENCES,

   educations: EDUCATIONS,

   skills: SKILLS,

   projects: PROJECTS,

   certifications: CERTIFICATIONS,

   contributions: CONTRIBUTIONS,

   keywords: [
      'Wilson Oon',
      'Wilson',
      'calorious',
      'wilsoon',
      'Developer',
      'Full-Stack Developer',
      'Psychology Enthusiast',
      'React',
      'Next.js',
      'Web Developer',
      'JavaScript',
   ],
}
