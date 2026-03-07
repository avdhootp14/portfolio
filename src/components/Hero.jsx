import { motion } from 'framer-motion'
import { ArrowDown, Code2, PenTool, Smartphone, Terminal } from 'lucide-react'

const Hero = () => {
    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>

            {/* Massive radial glow accent */}
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(224,255,0,0.06) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>

                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                    <h1 className="typo-display" style={{ marginBottom: '1rem' }}>
                        Avdhoot <br />
                        <span style={{ fontStyle: 'italic', color: 'var(--text-dim)' }}>Pimparkar.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: '1.25rem', color: 'var(--text-dim)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 400 }}
                >
                    A multidisciplinary engineer bridging visual architecture with deep technical systems. I design, build, and deploy premium digital experiences.
                </motion.div>

                {/* Role Badges */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}
                >
                    {[
                        { icon: <PenTool size={16} />, text: 'UI/UX Designer', color: '#E0FF00' },
                        { icon: <Code2 size={16} />, text: 'MERN Web Developer', color: '#10b981' },
                        { icon: <Smartphone size={16} />, text: 'Flutter Developer', color: '#3b82f6' },
                        { icon: <Terminal size={16} />, text: 'DevOps Enthusiast', color: '#a855f7' }
                    ].map((role, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            padding: '12px 20px', borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.08)',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(10px)',
                            color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500
                        }}>
                            <span style={{ color: role.color }}>{role.icon}</span>
                            {role.text}
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.a
                href="#projects"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '3rem', left: '4vw', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-main)' }}
            >
                <span className="typo-meta">Scroll to view selected works</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                    <ArrowDown size={16} />
                </motion.div>
            </motion.a>

        </section>
    )
}

export default Hero
