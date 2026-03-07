import { motion } from 'framer-motion'
import projects from '../data/caseStudies'
import { AuraFitUI, NovaPayUI, LuminaLearnUI } from './UIMockups'

const componentsMap = {
    AuraFitUI,
    NovaPayUI,
    LuminaLearnUI
}

const DeviceMedia = ({ project }) => {
    const isMobile = project.deviceType === 'mobile'

    if (project.mediaType === 'component' && project.componentName) {
        const MockupComponent = componentsMap[project.componentName]
        return (
            <div style={{ width: '100%', height: '100%', borderRadius: isMobile ? '32px' : '4px', overflow: 'hidden', backgroundColor: '#000', position: 'relative' }}>
                {MockupComponent && <MockupComponent />}
            </div>
        )
    }

    return (
        <div style={{ width: '100%', height: '100%', borderRadius: isMobile ? '32px' : '4px', overflow: 'hidden', backgroundColor: '#000', position: 'relative' }}>
            {project.mediaType === 'iframe' ? (
                <iframe
                    src={project.mediaUrl}
                    title={`${project.title} Prototype`}
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen
                />
            ) : (
                <img
                    src={project.mediaUrl}
                    alt={`${project.title} UI`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
            )}
        </div>
    )
}

const CasesInteractive = () => {
    return (
        <section id="work" style={{ position: 'relative', zIndex: 10, paddingBottom: '20vh' }}>

            <div className="container" style={{ padding: '20vh 4vw 10vh 4vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)' }}>
                <h2 className="typo-h2" style={{ color: 'var(--text-main)' }}>Interactive Systems</h2>
                <span className="typo-meta" style={{ color: 'var(--text-dim)' }}>[ Experiential UI ]</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh', marginTop: '15vh' }}>
                {projects.map((p, index) => (
                    <div key={p.id} className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8vh' }}>

                        {/* Project Context */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4vw' }}>
                            <div style={{ flex: '1 1 500px' }}>
                                <span className="typo-meta" style={{ color: p.color, marginBottom: '2vh', display: 'block' }}>
                                    {p.num} // {p.client}
                                </span>
                                <h3 className="typo-h2" style={{ marginBottom: '4vh' }}>{p.title}</h3>
                                <p className="typo-body" style={{ maxWidth: '600px' }}>{p.overview}</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh', minWidth: '200px' }}>
                                <div>
                                    <span className="typo-meta" style={{ color: 'var(--text-dim)', display: 'block' }}>Role</span>
                                    <span className="typo-meta" style={{ color: 'var(--text-main)' }}>{p.role}</span>
                                </div>
                                <div>
                                    <span className="typo-meta" style={{ color: 'var(--text-dim)', display: 'block' }}>Year</span>
                                    <span className="typo-meta" style={{ color: 'var(--text-main)' }}>{p.year}</span>
                                </div>
                                <div>
                                    <span className="typo-meta" style={{ color: 'var(--text-dim)', display: 'block' }}>Ecosystem</span>
                                    <span className="typo-meta" style={{ color: 'var(--text-main)' }}>
                                        {p.tags.join(', ')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Live Interactive Hardware Frame */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: '-10%' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '4vh 0' }}>
                                <div style={{ position: 'relative', padding: '10px', borderRadius: p.deviceType === 'mobile' ? '54px' : '16px', border: `1px solid ${p.color}20`, background: `radial-gradient(circle at 50% 50%, ${p.color}05 0%, transparent 80%)` }}>

                                    {/* The actual hardware class from index.css */}
                                    <div className={p.deviceType === 'mobile' ? 'device-phone' : 'device-macbook'} style={{ maxWidth: p.deviceType === 'desktop' ? '1200px' : 'auto' }}>
                                        <DeviceMedia project={p} />
                                    </div>

                                </div>
                            </div>
                        </motion.div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default CasesInteractive
