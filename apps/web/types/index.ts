/* eslint-disable no-unused-vars */
declare module 'react' {
   // Extend CSSProperties to allow custom CSS properties
   interface CSSProperties {
      [key: `--${string}`]: string | number
   }
}
/* eslint-enable no-unused-vars */

export * from './Resume'
export * from './Content'
export * from './Contact'
export * from './Contribution'
export * from './Education'
export * from './Experience'
export * from './Location'
export * from './Project'
export * from './Skill'
export * from './Technology'
export * from './Certification'
