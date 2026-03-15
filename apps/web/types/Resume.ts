import { Contact } from './Contact'
import { Experience } from './Experience'
import { Education } from './Education'
import { Project } from './Project'
import { Location } from './Location'
import { Skill } from './Skill'
import { Contribution } from './Contribution'
import { Content } from './Content'
import { Certification } from './Certification'

export type Resume = {
   firstName: string
   lastName: string
   gender?: string // Optional: 'male', 'female', 'non-binary', etc.

   name: string
   nick: string
   nameLink: string

   initials?: string
   initialsLink?: string

   locations: Location[]
   languages: Record<string, string>

   about: Content[]
   aboutLink: string

   avatar: string
   avatarLink: string

   summary: string
   summaryLink: string

   website: string

   contact: Contact

   experiences: Experience[]
   educations: Education[]

   skills: Skill[]

   projects: Project[]
   contributions: Contribution[]
   certifications?: Certification[]

   keywords: string[]
}
