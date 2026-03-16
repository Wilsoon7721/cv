# 🎯 Wilson's Professional CV Portfolio

A customized CV maker. This project is a fork of the [idimetrix/cv](https://github.com/idimetrix/cv) repository, modified to improve data automation, print reliability, and asset performance.

> Disclaimer: This project has been updated to Next 16 by Vercel automatically to fix some CVE vulnerabilities introduced by Next 15, the original Next.js version of this project. Some features (like next-seo) are likely to be broken.

---

## 🌟 Key Enhancements in this Fork

### 🧠 Automated Skill Experience Engine

I replaced the original static constant approach with a dynamic calculation utility.

- **Real-time Metrics:** Instead of hardcoding arrays like `CONST ONE = []`, the system now calculates years of experience automatically based on start dates.
- **Maintainability:** Updating the "Years of Experience" in the Skills section is now as simple as changing a date; the UI handles the rest.

### 🖨️ Advanced A4 Print Architecture

Web-based resumes often break when saved as PDFs. I implemented a custom print-CSS layer to ensure a flawless physical document:

- **Smart Page Breaks:** Uses `break-inside: avoid` and margins to ensure sections (like Projects or Experience) never get sliced across two pages.
- **Dynamic Header Layout:** Forced Flexbox logic for print ensures the header and avatar maintain their professional alignment regardless of browser print settings.
- **Display of Details:** Attempting to print the resume now lays out person's social media links in a 2-column grid instead of keeping them as buttons.

### 🚀 Optimized Asset Delivery

- **Lean Public Folder:** Removed 40+ legacy PWA splash screens and Microsoft Live Tile assets.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Page Architecture)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Monorepo Tooling:** [Turborepo](https://turbo.build/) & [pnpm](https://pnpm.io/)

---

## 🏃 Quick Start

```bash
# Clone the repository
git clone [https://github.com/Wilsoon7721/cv.git](https://github.com/Wilsoon7721/cv.git)

# Navigate to the project
cd cv

# Install dependencies and setup
pnpm bootstrap

# Start the development server
pnpm web:dev
```

For detailed information regarding the project, do refer to the original [README.md](https://github.com/idimetrix/cv?tab=readme-ov-file#-quick-start)