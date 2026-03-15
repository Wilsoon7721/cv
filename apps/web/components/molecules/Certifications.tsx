import React, { HTMLAttributes, memo, useCallback } from 'react'
import { Resume } from '../../types'
import { cn } from '@cv/lib'
import { Heading, Markdown } from '../atoms'

interface Props extends HTMLAttributes<HTMLDivElement> {
   resume: Resume
}

export const Certifications = memo<Props>(({ resume, className, ...rest }) => {
   const getCertificationKey = useCallback(
      (cert: NonNullable<Resume['certifications']>[0], index: number) => {
         return `cert-${cert.title}-${index}`
      },
      []
   )

   if (!resume.certifications || resume.certifications.length === 0) return null

   return (
      <div className={cn('flex flex-col gap-3 w-full', className)} {...rest}>
         <Heading level={2}>Certifications</Heading>

         <div className="flex w-full gap-3 flex-col">
            {resume.certifications.map((cert, index) => (
               <div
                  key={getCertificationKey(cert, index)}
                  className="flex flex-col"
               >
                  <div className="flex justify-between items-center flex-wrap">
                     <div className="font-bold flex items-center flex-wrap gap-1.5">
                        {cert.title}
                     </div>
                     <div className="italic">{cert.date}</div>
                  </div>
                  <div className="font-semibold">{cert.issuer}</div>
                  {cert.description && (
                     <div className="text-sm w-full text-black/70 mt-1">
                        <Markdown>{cert.description}</Markdown>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   )
})

Certifications.displayName = 'Certifications'
