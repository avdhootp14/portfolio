import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50)
        })
    }, [scrollY])

    const blurOpacity = useTransform(scrollY, [0, 50], [0, 1])

    return (
        <motion.header
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                padding: '24px 4vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                transition: 'padding 0.3s ease'
            }}
        >
            {/* Glass Background */}
            <motion.div
                style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(3, 3, 3, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    opacity: blurOpacity,
                    zIndex: -1
                }}
            />

            <a href="#home" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>Avdhoot.</span>
            </a>

            <nav style={{ display: 'none', md: 'flex', gap: '32px', alignItems: 'center' }}>
                {['Home', 'Projects', 'About', 'Connect'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        style={{
                            fontSize: '13px', fontWeight: 600, color: '#888', textDecoration: 'none',
                            textTransform: 'uppercase', letterSpacing: '1px', transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#fff'}
                        onMouseOut={e => e.currentTarget.style.color = '#888'}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <a
                href="#connect"
                style={{
                    padding: '10px 24px', borderRadius: '30px', backgroundColor: '#fff', color: '#000',
                    fontSize: '13px', fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase',
                    letterSpacing: '1px', transition: 'transform 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                Let's Talk
            </a>

            {/* Mobile menu could go here if needed, but keeping it simple for now */}
            <style>{`
                @media (max-width: 768px) {
                    nav { display: none !important; }
                }
                @media (min-width: 769px) {
                    nav { display: flex !important; }
                }
            `}</style>
        </motion.header>
    )
}

export default Navbar
