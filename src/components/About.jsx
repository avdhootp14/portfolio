import { motion } from 'framer-motion'
import { Terminal, Database, Smartphone, Palette, Globe, Server, Layers } from 'lucide-react'

const About = () => {
    return (
        <section id="about" style={{ padding: '15vh 0', position: 'relative', zIndex: 10, borderTop: '1px solid var(--border-color)' }}>
            <div className="container" style={{ padding: '0 4vw' }}>
                <div style={{ marginBottom: '8vh' }}>
                    <span className="typo-meta" style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '2vh' }}>About Me</span>
                    <h2 className="typo-h2" style={{ maxWidth: '800px' }}>
                        I build products that are <span style={{ fontStyle: 'italic', color: 'var(--text-dim)' }}>beautiful</span> on the outside and <span style={{ fontStyle: 'italic', color: 'var(--text-dim)' }}>powerful</span> on the inside.
                    </h2>
                </div>

                {/* Grid Layout for Skills */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* UI/UX Card */}
                    <div style={{
                        padding: '40px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(224,255,0,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                        <Palette size={32} color="#E0FF00" style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>UI/UX Designer</h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>Pixel-perfect, human-centric design systems. I bridge the gap between aesthetics and usability to create memorable digital experiences.</p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
                            {['Figma', 'Framer', 'Prototyping', 'User Research'].map(tag => <span key={tag} style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{tag}</span>)}
                        </div>
                    </div>

                    {/* MERN Card */}
                    <div style={{
                        padding: '40px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                        <Globe size={32} color="#10b981" style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>MERN Stack Developer</h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>Architecting scalable, high-performance web applications using MongoDB, Express.js, React, and Node.js. Full-stack mastery.</p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
                            {['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'].map(tag => <span key={tag} style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{tag}</span>)}
                        </div>
                    </div>

                    {/* Flutter Card */}
                    <div style={{
                        padding: '40px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                        <Smartphone size={32} color="#3b82f6" style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>Flutter Developer</h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>Bringing native-quality cross-platform mobile apps to life with rich animations and state management using Dart & Flutter.</p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
                            {['Flutter', 'Dart', 'Provider', 'Bloc', 'Animations'].map(tag => <span key={tag} style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{tag}</span>)}
                        </div>
                    </div>

                    {/* DevOps Card */}
                    <div style={{
                        padding: '40px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                        <Terminal size={32} color="#a855f7" style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '12px' }}>DevOps Enthusiast</h3>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>Streamlining deployment pipelines, managing infrastructure, and ensuring systems are automated, reliable, and secure.</p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
                            {['Docker', 'AWS', 'CI/CD', 'Linux', 'Git Actions'].map(tag => <span key={tag} style={{ padding: '4px 10px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--text-dim)' }}>{tag}</span>)}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
