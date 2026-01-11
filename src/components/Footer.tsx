import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 bg-clip-text text-transparent mb-6">
                    Ready to Amplify Your Traffic?
                </h2>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                    I am currently open to high-value partnerships with SaaS companies looking for technical leverage in their growth strategy.
                </p>

                <div className="flex items-center justify-center gap-6 mb-12">
                    {[
                        { icon: Github, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Linkedin, href: "#" },
                        { icon: Mail, href: "#" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all hover:-translate-y-1"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <div className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} RoryZhang. Built with Technical Leverage.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
