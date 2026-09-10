/**
 * Centralized Portfolio Data for Muhammed Midlaj N
 * 
 * Edit your personal information, links, skills, and projects here.
 * Any changes made in this file will automatically reflect across the entire website!
 */

export const personalInfo = {
  name: "Muhammed Midlaj N",
  shortName: "Midlaj",
  role: "Aspiring Full Stack Developer",
  target: "Entry-Level Developer",
  email: "muhammedmidlaaj5@gmail.com",
  // Update this with your exact GitHub profile URL
  githubUsername: "midlaaaj-jpg",
  githubUrl: "https://github.com/midlaaaj-jpg",
  instagramUsername: "mi_dlaaj",
  instagramUrl: "https://www.instagram.com/mi_dlaaj?stkn=MWMyeWp2aXpocGRheQ==",
  status: "Open to Entry-Level & Junior Roles",
  location: "Kerala, India", // You can customize your location
  bio: "Aspiring Full Stack Developer who has completed foundational and modern frontend learning and is actively expanding expertise in full-stack architecture, backend systems, and scalable web engineering.",
  heroIntroduction: "Passionate about building responsive, user-friendly web applications. Having completed my frontend learning with React, JavaScript, and Tailwind CSS, I am actively leveling up my programming and full-stack development skills to craft impactful digital solutions.",
};

export const typingRoles = [
  "Frontend Developer",
  "React Developer",
  "Aspiring Full Stack Developer"
];

export const coreValues = [
  {
    id: 1,
    title: "Hardworking",
    description: "Deeply dedicated to writing clean, maintainable code and seeing complex problem-solving through to high-quality completion.",
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Willingness to Learn",
    description: "Fast adapter with an inquisitive mindset, eager to master modern technologies, architectural patterns, and industry standards.",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Continuous Improvement",
    description: "Committed to daily deliberate practice, code reviews, and refining development workflows to consistently build better software.",
    icon: "TrendingUp"
  },
  {
    id: 4,
    title: "Interest in Software Development",
    description: "Genuinely passionate about the craft of software engineering—from fluid user experiences to robust web infrastructure.",
    icon: "Code2"
  }
];

export const skillsData = [
  {
    name: "HTML5",
    category: "Frontend Core",
    level: "Proficient",
    description: "Semantic markup, modern accessibility (a11y), and clean DOM structuring.",
    iconName: "FileCode2",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    category: "Frontend Core",
    level: "Proficient",
    description: "Responsive layouts, Flexbox, Grid, CSS variables, and modern visual effects.",
    iconName: "Palette",
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    category: "Core Language",
    level: "Proficient",
    description: "ES6+ modern syntax, asynchronous programming, DOM manipulation, and APIs.",
    iconName: "Braces",
    color: "#F7DF1E"
  },
  {
    name: "React",
    category: "Frontend Library",
    level: "Intermediate",
    description: "Functional components, custom hooks, reactive state management, and lifecycle.",
    iconName: "Atom",
    color: "#61DAFB"
  },
  {
    name: "Tailwind CSS",
    category: "Styling Framework",
    level: "Proficient",
    description: "Utility-first rapid prototyping, responsive layouts, and dark mode theming.",
    iconName: "Wind",
    color: "#06B6D4"
  },
  {
    name: "Formik",
    category: "Form Management",
    level: "Intermediate",
    description: "Declarative React form handling, validation states, and structured error control.",
    iconName: "CheckSquare",
    color: "#0284C7"
  },
  {
    name: "GitHub",
    category: "Tools & Version Control",
    level: "Proficient",
    description: "Git version control, repositories, branching workflows, and collaborative PRs.",
    iconName: "GitBranch",
    color: "#8B5CF6"
  }
];

export const projectsData = [
  {
    id: "todo-app",
    title: "Todo Application",
    tagline: "Task Management & Daily Productivity App",
    description: "A responsive Todo application that allows users to manage their daily tasks by adding, completing, and deleting activities with clean interactive feedback.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Task creation with real-time UI updates",
      "Completion status toggle with visual cues",
      "Task removal with confirmation safeguards",
      "Fully responsive mobile and desktop layout"
    ],
    // Replace these placeholder URLs with your actual deployed project and repo links:
    liveDemoUrl: "https://midlaaj-todo.example.com", // update with your live demo URL
    githubUrl: "https://github.com/midlaaaj-jpg/todo-app", // update with your GitHub repository URL
    featured: true,
    category: "Frontend Application"
  }
  // To add a new project in the future, simply copy the object above and paste it here!
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
