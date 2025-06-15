import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        // "Data Science": [
        //     "Python", "Pandas", "Scikit-learn", "TensorFlow",
        //     "SQL", "PowerBi", "Statistical Analysis", "Hypothesis Testing",
        //     "Numpy", "Matplotlib", "Computer Vision", "OpenCv", "Time Series"
        // ],
        "Software Engineering": [
            "Java", "Spring Boot", "OOP", "UML Diagrams",
            "Django", "REST APIs", "Git", "Docker", "TDD", "SDLC"
        ],
        "Frontend": [
            "HTML", "CSS", "Tailwind", "JavaScript", "React Basics",
            "Responsive Design", "Bootstrap"
        ]
    };

    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-cyan-100">
                    Technical Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-slate-700 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-slate-600 px-3 py-1 rounded-full text-sm"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;