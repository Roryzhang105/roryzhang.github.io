import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, MousePointerClick } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI Writer Compare',
            category: 'Niche Comparison Site',
            stats: [
                { label: 'Mo. Traffic', value: '45K+', icon: Users },
                { label: 'Conversion', value: '3.2%', icon: MousePointerClick },
            ],
            tags: ['Next.js', 'MDX', 'Affiliate'],
            status: 'Active',
        },
        {
            title: 'SaaS Tool Stack',
            category: 'Directory & Review',
            stats: [
                { label: 'Organic KWs', value: '1.2K', icon: TrendingUp },
                { label: 'DR', value: '35', icon: ExternalLink },
            ],
            tags: ['Astro', 'Tailwind', 'Python'],
            status: 'Scaling',
        },
        {
            title: 'Productivity Flow',
            category: 'Automated Blog',
            stats: [
                { label: 'Articles', value: '500+', icon: Users },
                { label: 'Click Rate', value: '4.8%', icon: MousePointerClick },
            ],
            tags: ['WordPress (Headless)', 'GraphQL'],
            status: 'Maintenance',
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-200 to-slate-400 bg-clip-text text-transparent mb-6">
                            Digital Assets
                        </h2>
                        <p className="text-slate-400 text-lg">
                            A portfolio of self-sustaining traffic engines.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        {/* Decorative element */}
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            key={idx}
                            className="bg-slate-900/20 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/40 transition-all hover:-translate-y-1 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-xs font-semibold text-emerald-400 mb-2 block">{project.category}</span>
                                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                                </div>
                                <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {project.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {project.stats.map((stat, sIdx) => (
                                    <div key={sIdx} className="bg-slate-950 rounded-lg p-3 border border-slate-800">
                                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                                            <stat.icon className="w-3 h-3" />
                                            <span className="text-xs uppercase tracking-wider">{stat.label}</span>
                                        </div>
                                        <div className="text-lg font-mono font-semibold text-slate-200">{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                                        #{tag}
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

export default Projects;
