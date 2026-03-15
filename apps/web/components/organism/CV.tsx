import { HTMLAttributes, memo } from 'react'
import { Resume } from '../../types'
import { cn } from '@cv/lib'
import {
   Locations,
   Avatar,
   Socials,
   Summary,
   Name,
   Actions,
   About,
   Experience,
   Education,
   Skills,
   Projects,
   Languages,
   Links,
   Contributions,
   Certifications,
   Navigations,
} from '../molecules'
import React from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
   resume: Resume
}

// Memoized CV component to prevent unnecessary re-renders
export const CV = memo<Props>(({ resume, className, ...rest }) => {
   return (
      <div
         className={cn(
            'page flex relative justify-center bg-zinc-500 print:bg-none',
            className
         )}
         {...rest}
      >
         <style jsx>{`
            @page {
               size: A4;
               margin: 0;
               padding: 0;
            }

            * {
               // Force add background color to print
               -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
               color-adjust: exact !important; /* Firefox 48 – 96 */
               print-color-adjust: exact !important; /* Firefox 97+, Safari 15.4+ */
            }

            /* Smooth scrolling for hash links */
            html {
               scroll-behavior: smooth;
            }

            /* Scroll offset to account for any fixed headers */
            section[id] {
               scroll-margin-top: 2rem;
            }

            /* Highlight section when targeted by hash */
            section[id]:target {
               animation: highlightSection 2s ease-in-out;
            }

            @keyframes highlightSection {
               0% {
                  background-color: rgba(59, 130, 246, 0.1);
               }
               50% {
                  background-color: rgba(59, 130, 246, 0.2);
               }
               100% {
                  background-color: transparent;
               }
            }

            @media print {
               /* Hide default browser header/footer by forcing zero margin but keep document padding */
               @page {
                  margin: 0;
               }

               /* Convert flex container to block so negative margins don't conflict with gap */
               #cv > div {
                  display: block !important;
               }

               section:not(#header) {
                  display: block;
                  break-inside: avoid;
                  border-top: 10mm solid transparent;
                  margin-top: -10mm !important;
                  margin-bottom: 2.25rem !important;
               }

               #header {
                  display: flex !important;
                  flex-direction: row !important;
                  justify-content: space-between !important;
                  border-top: none !important;
                  margin-top: 0 !important;
                  margin-bottom: 2.25rem !important;
               }

               #header > div:first-child {
                  flex: 1;
               }

               #projects div,
               #certifications div {
                  break-inside: avoid;
               }

               h1,
               h2,
               h3 {
                  break-after: avoid;
               }
            }

            * {
               -webkit-print-color-adjust: exact !important;
               print-color-adjust: exact !important;
            }
         `}</style>

         {/* Bug-free Navigations component */}
         <Navigations />

         <div
            className="m-0 flex min-h-[297mm] relative w-[210mm] flex-col bg-white p-[10mm] text-base print:bg-none"
            id="cv"
         >
            <div className="flex w-full gap-9 flex-col">
               {/* Header Section */}
               <section
                  id="header"
                  className="flex w-full flex-col-reverse gap-6 justify-between sm:flex-row"
               >
                  <div className="flex flex-col gap-1.5">
                     <div id="name-summary" className="flex flex-col">
                        <Name resume={resume} className="" />
                        <Summary resume={resume} className="" />
                     </div>

                     <div id="locations">
                        <Locations resume={resume} className="" />
                     </div>

                     <div id="contact" className="mt-1.5 flex flex-col gap-3">
                        <Links resume={resume} />
                        <Socials resume={resume} />
                     </div>
                  </div>
                  <div id="avatar">
                     <Avatar
                        resume={resume}
                        className="bg-aluminum sm:bg-transparent"
                     />
                  </div>
               </section>

               {/* Main Content Sections */}
               <div className="flex w-full gap-9 flex-col">
                  {resume.about?.length > 0 && (
                     <section id="about">
                        <About resume={resume} className="" />
                     </section>
                  )}
               </div>

               {resume.experiences?.length > 0 && (
                  <section id="experience">
                     <Experience resume={resume} className="" />
                  </section>
               )}

               {resume.educations?.length > 0 && (
                  <section id="education">
                     <Education resume={resume} className="" />
                  </section>
               )}

               {resume.skills?.length > 0 && (
                  <section id="skills">
                     <Skills resume={resume} className="" />
                  </section>
               )}

               {resume.languages &&
                  Object.keys(resume.languages).length > 0 && (
                     <section id="languages">
                        <Languages resume={resume} className="" />
                     </section>
                  )}

               {(resume.certifications?.length ?? 0) > 0 && (
                  <section id="certifications">
                     <Certifications resume={resume} className="" />
                  </section>
               )}

               {resume.projects?.length > 0 && (
                  <section id="projects">
                     <Projects resume={resume} className="" />
                  </section>
               )}

               {resume.contributions?.length > 0 && (
                  <section id="contributions">
                     <Contributions resume={resume} className="" />
                  </section>
               )}
            </div>

            <section id="actions">
               <Actions resume={resume} className="" />
            </section>
         </div>
      </div>
   )
})

CV.displayName = 'CV'
