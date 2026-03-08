import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Contact = () => {
    return (
        <footer id="connect" style={{ position: 'relative', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

            <div className="container" style={{ padding: '20vh 4vw 5vh 4vw', display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '10vh', marginBottom: '5vh', flexWrap: 'wrap', gap: '4vh' }}>

                    <div>
                        <span className="typo-meta" style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '4vh' }}>Sign Off</span>
                        <h2 className="typo-h2">
                            Ready to engineer <br />
                            <span style={{ fontStyle: 'italic', color: 'var(--text-dim)' }}>the impossible.</span>
                        </h2>
                    </div>

                    <a href="mailto:hello@avdhoot.design" style={{ textDecoration: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--text-main)', paddingBottom: '8px' }}>
                        <span className="typo-meta">Initiate Sequence</span>
                        <motion.div whileHover={{ x: 4, y: -4, color: '#E0FF00' }} transition={{ type: 'spring', stiffness: 300 }}>
                            <ArrowUpRight size={18} />
                        </motion.div>
                    </a>

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4vh' }}>
                    <span className="typo-meta" style={{ color: 'var(--text-dim)' }}>© {new Date().getFullYear()} Avdhoot Pimparkar</span>

                    <div style={{ display: 'flex', gap: '4vw', flexWrap: 'wrap' }}>
                        {[
                            { name: 'GitHub', url: 'https://www.github.com/avdhootp14' },
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/avdhootp144' },
                            { name: 'X/Twitter', url: '#' },
                            { name: 'Dribbble', url: '#' }
                        ].map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="typo-meta" style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-dim)'}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <span className="typo-meta" style={{ color: '#E0FF00' }}>● Systems Nominal</span>
                </div>

            </div>
        </footer>
    )
}

export default Contact
