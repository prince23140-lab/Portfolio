# Prince Nziza - Professional Portfolio

![Portfolio Preview](/public/images/portrait-1.jpg)

A dynamic, premium portfolio and resume website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project serves as a personal brand showcase, featuring a downloadable resume, an interactive gallery, and a responsive design that looks great on all devices.

## 🚀 Features

-   **Dynamic Content:** All data (experience, education, skills) is driven by a single configuration file (`src/data/resume-data.ts`), making updates effortless.
-   **Premium Animations:** Smooth scroll animations and page transitions powered by **Framer Motion**.
-   **Infinite Gallery:** A slick, auto-scrolling carousel showcasing portfolio images.
-   **Dark/Light Mode:** Fully integrated theme switcher with a custom toggle button.
-   **Responsive Design:** Mobile-first approach ensuring perfect display on phones, tablets, and desktops.
-   **Downloadable Resume:** Direct link to download the PDF version of the resume.
-   **Contact Form:** A styled contact area with social media links.

## 🛠️ Tech Stack

-   **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📝 Customization

### Updating Content
Navigate to `src/data/resume-data.ts`. Here you can update:
-   Personal Information (Name, Summary, Contact)
-   Work Experience & Education
-   Skills & Certifications
-   Social Links
-   Gallery Images

### Replacing Images
Place your images in the `public/images` directory and reference them in `src/data/resume-data.ts`.

### Updating Resume
Replace the `Prince Nziza_Resume.docx.pdf` file in the `public` folder with your latest resume PDF.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
