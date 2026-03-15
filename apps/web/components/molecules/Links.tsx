import { cn } from '@cv/lib'
import { HTMLAttributes, memo } from 'react'
import { Resume } from '../../types'
import Link from 'next/link'
import React from 'react'
import { faEnvelope, faPhone } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props extends HTMLAttributes<HTMLDivElement> {
   resume: Resume
}

export const Links = memo<Props>(({ resume, className, ...rest }) => {
   if (!resume.contact.email && !resume.contact.phone) return null

   return (
      <div
         className={cn(
            'flex flex-wrap gap-1.5 items-center print:grid print:grid-cols-2 print:gap-x-4',
            className
         )}
         {...rest}
      >
         {resume.contact.email && (
            <Link
               href={`mailto:${resume.contact.email}`}
               title={resume.contact.email}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-1.5 hover:underline text-sm text-black/80"
            >
               <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-4 w-4 shrink-0"
               />
               <span className="print:inline">{resume.contact.email}</span>
            </Link>
         )}

         {resume.contact.phone && (
            <Link
               href={`tel:${resume.contact.phone}`}
               title={resume.contact.phone}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-1.5 hover:underline text-sm text-black/80"
            >
               <FontAwesomeIcon icon={faPhone} className="h-4 w-4 shrink-0" />
               <span className="print:inline">{resume.contact.phone}</span>
            </Link>
         )}
      </div>
   )
})

Links.displayName = 'Links'
