import { Project } from '../../types/Project'

export const PROJECTS: Project[] = [
   {
      title: 'Bubble Bliss',
      company: 'Bubble Bliss',
      link: 'https://helehao.com/',
      description:
         "End-to-end delivery of a brand's digital presence. Translated inspiration into a modern UI. Handled CMS config, DNS, and deployment using Next.js.",
      badges: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Cloudflare Pages'],
      start: 'Dec 2025',
      logo: undefined,
   },
   {
      title: 'whatsapp-chatnalyzer',
      company: 'whatsapp-chatnalyzer',
      link: 'https://wilsoon.dev/apps/whatsapp-chatnalyzer',
      description:
         'A React web app to analyze WhatsApp chat exports privately in the browser. Visualizes chat statistics, word usage, and activity timelines with charts.',
      badges: ['React', 'Chart.js', 'Bootstrap'],
      start: 'Mar 2025',
      logo: undefined,
   },
   {
      title: 'Task Organizer',
      company: 'Task Organizer',
      description:
         'A full-stack task management web app with JWT authentication, varied workspaces and due dates, featuring a responsive design.',
      badges: ['JavaScript', 'HTML/CSS', 'MySQL', 'Express', 'JSON Web Tokens'],
      start: 'Jun 2024',
      logo: undefined,
      link: undefined,
   },
   {
      title: 'SpotifyAutoSync',
      company: 'SpotifyAutoSync',
      description:
         'A lightweight utility to automatically sync liked songs from Spotify to a dedicated playlist while maintaining a separate list of recent additions.',
      badges: ['Python', 'Spotify Web API', 'Flask'],
      start: 'Jun 2024',
      logo: undefined,
      link: undefined,
   },
   {
      title: 'FoodTagsWeb',
      company: 'FoodTagsWeb',
      description:
         'A backend service to store and tag food items based on dietary preferences. Built with Flask and MySQL, using Google Sheets as the frontend interface.',
      badges: ['Google Sheets', 'Python', 'Flask', 'MySQL'],
      start: 'Jan 2024',
      logo: undefined,
      link: undefined,
   },
   {
      title: 'CalendarPlanner',
      company: 'CalendarPlanner',
      description:
         'A tool integrating with Google Calendar to manage events with an auto-expire feature, and synchronizing external shift schedules automatically.',
      badges: ['Python', 'Flask', 'Google Calendar API'],
      start: 'Sep 2023',
      logo: undefined,
      link: undefined,
   },
   {
      title: 'CalorieCalculatorExporter',
      company: 'CalorieCalculatorExporter',
      description:
         'An automated ETL pipeline synchronizing daily caloric intake from Google Sheets with Strava activity data, providing logs to Firebase for analytics.',
      badges: ['Python', 'Flask', 'Firebase', 'Strava API', 'Google Sheets'],
      start: 'Jul 2023',
      logo: undefined,
      link: undefined,
   },
]
