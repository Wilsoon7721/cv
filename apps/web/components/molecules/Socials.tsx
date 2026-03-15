import { HTMLAttributes, memo } from 'react'
import { Resume } from '../../types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/pro-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons'
import { cn } from '@cv/lib'
import React from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
   resume: Resume
}

export const Socials = memo<Props>(({ resume, className, ...rest }) => {
   return (
      <div
         className={cn(
            'flex flex-wrap gap-1.5 items-center print:grid print:grid-cols-2 print:gap-x-4',
            className
         )}
         {...rest}
      >
         {resume.contact.socials?.map((social) => (
            <Link
               key={social.name}
               title={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex print:w-auto print:border-none print:justify-start print:gap-1.5 print:size-auto"
            >
               <span className="sr-only">{social.name}</span>
               <FontAwesomeIcon
                  icon={social.icon}
                  className="h-4 w-4 shrink-0"
               />
               <span className="hidden print:inline text-sm text-black/80">
                  {social.url.replace(/^https?:\/\/(www\.)?/, '')}
               </span>
            </Link>
         ))}
         {resume.contact.website && (
            <Link
               href={resume.contact.website}
               title="Portfolio Website"
               target="_blank"
               rel="noopener noreferrer"
               className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex print:w-auto print:border-none print:justify-start print:gap-1.5 print:size-auto"
            >
               <span className="sr-only">Portfolio Website</span>
               <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 shrink-0" />
               <span className="hidden print:inline text-sm text-black/80">
                  {resume.contact.website.replace(/^https?:\/\/(www\.)?/, '')}
               </span>
            </Link>
         )}
         {resume.contact.call && (
            <Link
               href={resume.contact.call}
               title="Book a Call"
               target="_blank"
               rel="noopener noreferrer"
               className="border border-black transition-all duration-300 hover:scale-105 rounded size-8 items-center justify-center flex print:w-auto print:border-none print:justify-start print:gap-1.5 print:size-auto"
            >
               <span className="sr-only">Book a Call</span>
               <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-4 w-4 shrink-0"
               />
               <span className="hidden print:inline text-sm text-black/80">
                  {resume.contact.call.replace(/^https?:\/\/(www\.)?/, '')}
               </span>
            </Link>
         )}
      </div>
   )
})

Socials.displayName = 'Socials'
