import { useState } from "react";
import {
  Code,
  Briefcase,
  User,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      title: "The Wild Oasis - Hotel Management Dashboard",
      description:
        "Full-featured hotel management dashboard handling bookings, cabins, guests, and business analytics. Features authentication, real-time data visualization, and URL-driven state management.",
      tech: [
        "React",
        "React Query",
        "Supabase",
        "Styled Components",
        "Recharts",
      ],
      link: "https://the-wild-oasis-496c.vercel.app/",
      github: "https://github.com/giriraj47/the-wild-oasis",
    },
  ];

  const techStack = {
    Frontend: [
      "React",
      "React Router",
      "React Query",
      "React Hook Form",
      "JavaScript",
    ],
    Styling: ["Styled Components", "Tailwind CSS", "CSS3"],
    "Backend & Database": ["Supabase", "Node.js", "REST APIs"],
    "Data Visualization": ["Recharts", "Chart.js"],
    "Tools & Deployment": ["Git", "Vite", "Vercel", "npm", "VS Code"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              &lt;Giriraj Joshi /&gt;
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection("about")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "about"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <User size={18} />
                About
              </button>
              <button
                onClick={() => setActiveSection("projects")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "projects"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Briefcase size={18} />
                Projects
              </button>
              <button
                onClick={() => setActiveSection("tech")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === "tech"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Code size={18} />
                Tech Stack
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="mb-6">
            <img
              src="avatar.jpg"
              className="object-cover w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-lg"
            ></img>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Frontend Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            {/* <a
              href="mailto:levilightsg@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <Mail size={20} />
              Contact Me
            </a> */}
            <a
              href="https://www.linkedin.com/in/girirajjoshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <Linkedin size={20} />
              Linkedin
            </a>
            <a
              href="https://github.com/giriraj47"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </section>

        {/* About Section */}
        {activeSection === "about" && (
          <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="text-blue-600" />
              About Me
            </h3>
            <div className="text-gray-700 space-y-4">
              <p>
                I am a front-end developer focused on building clean,
                responsive, and user-friendly web interfaces. I work primarily
                with modern JavaScript, React, and CSS frameworks, and I enjoy
                translating design concepts into functional, accessible
                experiences in the browser.
              </p>
              <p>
                I value writing readable, maintainable code and paying attention
                to small details that improve usability and performance.
              </p>
              <p></p>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Briefcase className="text-blue-600" />
              Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all hover:transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors ml-4 font-medium"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {activeSection === "tech" && (
          <section className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code className="text-blue-600" />
              Tech Stack
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div
                  key={category}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-md"
                >
                  <h4 className="text-xl font-bold text-blue-600 mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {technologies.map((tech, i) => (
                      <li
                        key={i}
                        className="text-gray-700 flex items-center gap-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2026 Giriraj. Built with React & Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/giriraj47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/girirajjoshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:levilightsg@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
