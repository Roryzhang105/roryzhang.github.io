import { motion } from 'framer-motion';
import { Search, Bot, BarChart3 } from 'lucide-react';

const Methodology = () => {
    const steps = [
        {
            icon: Search,
            title: 'Niche Identification',
            desc: 'Using Python scripts to scrape keyword difficulty and competitive gaps in SaaS verticals.',
            tags: ['Semrush API', 'Scrapy', 'Pandas'],
            color: 'from-blue-500 to-indigo-500',
        },
        {
            icon: Bot,
            title: 'Automated Content Ops',
            desc: 'Deploying LLM agents to generate high-fidelity technical reviews and comparisons at scale.',
            tags: ['OpenAI API', 'LangChain', 'Next.js'],
            color: 'from-indigo-500 to-purple-500',
        },
        {
            icon: BarChart3,
            title: 'Traffic & Conversion',
            desc: 'Optimizing for user intent and funneling traffic to high-ticket partner programs.',
            tags: ['Programmatic SEO', 'CRO', 'Analytics'],
            color: 'from-purple-500 to-pink-500',
        },
    ];

    return (
        <section id="methodology" className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-200 to-slate-400 bg-clip-text text-transparent mb-6">
                        The Technical Leverage
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        I don't just write content. I build systems that generate value.
                        <br />
                        My workflow combines data engineering with creative automation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            key={idx}
                            className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                            <div className="mb-6 p-4 rounded-xl bg-slate-950 inline-block border border-slate-800 group-hover:border-indigo-500/30 transition-colors">
                                <step.icon className="w-8 h-8 text-indigo-400" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-100 mb-3">{step.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {step.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {step.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                        {tag}
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

export default Methodology;
