import { Content } from './Content'

export type Experience = {
   company: string
   link?: string
   badges?: string[]
   title: string
   start: string
   end?: string
   contents: Content[]
}
