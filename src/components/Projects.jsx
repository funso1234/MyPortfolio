import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "SoulEase",
            problem: "Many young individuals face mental health challenges without access to proper support.",
            solution: "Built a digital platform that connects youth with certified therapists for accessible and confidential mental health care",
            impact: " Helped reduce suicide risk by improving access to timely professional support",
            tools: ["Java", "React", "PostgresSQL", "Spring Boot"],
            details: "Designed and implemented core backend services and frontend integration; laid groundwork for future expansion to include AI-driven recommendations and user analytics"
        },
        {
            title: "Wasobia Interstate Transportation",
            problem: "Lack of reliable and efficient interstate transportation booking systems",
            solution: "Built a user-friendly platform to compare, book, and track interstate travel options",
            impact: "Improved access to affordable transport and increased ridership transparency",
            tools: ["Java", "React", "PostgresSQL", "Spring Boot"],
            details: "Designed responsive UI, implemented secure booking flow, and integrated real-time bus tracking via third-party APIs"
        },
        {
            title: "Antlias-Merchant",
            problem: "Manual and inefficient tracking of petrol inventory and distribution",
            solution: "Developed a web platform for real-time monitoring of fuel levels, deliveries, and consumption across stations",
            impact: "Increased operational transparency, reduced fuel losses, and improved delivery scheduling",
            tools: ["Nest.js", "Tailwind CSS"],
            details: "Built role-based dashboards, integrated tank sensors data, and implemented reporting features for fuel inventory and logistics"
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