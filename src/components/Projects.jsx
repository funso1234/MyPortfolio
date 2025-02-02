import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Retail Theft Detection System",
            problem: "Shoplifting causes $100B+ in annual global losses",
            solution: "Real-time computer vision system using OpenCV and YOLO",
            impact: "Reduced potential losses by 40% in pilot tests",
            tools: ["Python", "TensorFlow", "OpenCV", "Django", "YOLO"],
            details: "Developed core ML pipeline and integration of computer vision system with web interface"
        },
        {
            title: "Accounting Management Software",
            problem: "Manual financial tracking slows business growth",
            solution: "Comprehensive financial management system with cash flow forecasting",
            impact: "Reduced financial reporting time by 50% for SMEs",
            tools: ["Java Spring Boot", "TensorFlow", "SARIMA", "Matplotlib"],
            details: "Implemented forecasting models and inventory management features"
        },
        {
            title: "Silent Speech Interface",
            problem: "Communication barriers for the deaf community",
            solution: "Real-time speech-to-text conversion system",
            impact: "Enabled seamless communication for hearing-impaired users",
            tools: ["Java", "WebSockets", "NLP", "React"],
            details: "Collaborated on backend development and real-time communication features"
        },
        {
            title: "Nigerian Tourism Platform",
            problem: "Underrepresentation of Nigeria's cultural heritage",
            solution: "Interactive tourism portal with booking capabilities",
            impact: "Increased tourism engagement by 30% in beta testing",
            tools: ["Django", "PostgreSQL", "React", "Mapbox"],
            details: "Full-stack development including payment integration and user reviews system"
        },
        {
            title: "Easy Wallet App",
            problem: "Inconvenience of physical cash transactions",
            solution: "Digital wallet for expense tracking and money transfers",
            impact: "Simplified financial transactions for 500+ beta users",
            tools: ["Java Spring Boot", "PostgreSQL", "React"],
            details: "Implemented secure transaction system and savings goal features"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-slate-700 p-6 rounded-xl cursor-pointer hover:bg-slate-600/50 transition-all"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.problem}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="bg-slate-600 px-2 py-1 rounded-full text-xs"
                                    >
                    {tool}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;