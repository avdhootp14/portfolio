import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Flame, Heart, Timer, ArrowRight, ArrowUpRight, ArrowDownRight, CreditCard, Bell, ChevronDown, User, ArrowRightLeft, QrCode, Play, CheckCircle2, Zap, Camera, Mic, Volume2, RefreshCw, Settings, MessageSquare, Search, PlayCircle, ArrowLeft, LogOut, ChevronRight, Edit2, Home } from 'lucide-react'
export const AuraFitUI = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0A0A0A', position: 'relative', overflow: 'hidden', padding: '24px', color: '#fff', fontFamily: 'var(--font-sans)' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                <div>
                    <div style={{ fontSize: '13px', color: '#888', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Today</div>
                    <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px' }}>Recovery: <span style={{ color: '#E0FF00' }}>92%</span></div>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333' }}>
                    <Activity size={20} color="#E0FF00" />
                </div>
            </div>

            {/* Glowing Activity Rings */}
            <div style={{ position: 'relative', width: '220px', height: '220px', margin: '40px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="220" height="220" viewBox="0 0 220 220" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="110" cy="110" r="90" fill="none" stroke="#222" strokeWidth="16" />
                    <circle cx="110" cy="110" r="66" fill="none" stroke="#222" strokeWidth="16" />
                    <motion.circle
                        initial={{ strokeDasharray: '0 1000' }}
                        animate={{ strokeDasharray: '480 1000' }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        cx="110" cy="110" r="90" fill="none" stroke="#E0FF00" strokeWidth="16" strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(224,255,0,0.4))' }}
                    />
                    <motion.circle
                        initial={{ strokeDasharray: '0 1000' }}
                        animate={{ strokeDasharray: '280 1000' }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        cx="110" cy="110" r="66" fill="none" stroke="#FF003C" strokeWidth="16" strokeLinecap="round"
                    />
                </svg>
                <div style={{ position: 'absolute', textAlign: 'center' }}>
                    <Flame size={24} color="#E0FF00" style={{ margin: '0 auto 4px auto' }} />
                    <div style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1 }}>1,450</div>
                    <div style={{ fontSize: '11px', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>KCAL</div>
                </div>
            </div>

            {/* Metric Cards */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ flex: 1, backgroundColor: '#111', borderRadius: '20px', padding: '20px', border: '1px solid #222', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                    <Heart size={20} color="#FF003C" />
                    <div>
                        <div style={{ fontSize: '24px', fontWeight: 800 }}>142 <span style={{ fontSize: '12px', color: '#888', fontWeight: 600 }}>BPM</span></div>
                        <div style={{ fontSize: '11px', color: '#888' }}>Avg Heart Rate</div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ flex: 1, backgroundColor: '#111', borderRadius: '20px', padding: '20px', border: '1px solid #222', display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                    <Timer size={20} color="#00F0FF" />
                    <div>
                        <div style={{ fontSize: '24px', fontWeight: 800 }}>45 <span style={{ fontSize: '12px', color: '#888', fontWeight: 600 }}>MIN</span></div>
                        <div style={{ fontSize: '11px', color: '#888' }}>Zone 4 Training</div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', backgroundColor: '#E0FF00', color: '#000', padding: '20px', borderRadius: '20px', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800, fontSize: '18px', cursor: 'pointer' }}
            >
                <span>Start Next Workout</span>
                <div style={{ backgroundColor: '#000', color: '#E0FF00', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowRight size={16} />
                </div>
            </motion.button>
        </div>
    )
}

export const NovaPayUI = () => {
    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#09090b', position: 'relative', overflow: 'hidden', padding: '16px', color: '#fff', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column' }}>

            {/* Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={16} color="#a1a1aa" />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>Hey, Alex</span>
                </div>
                <div style={{ padding: '6px 12px', borderRadius: '20px', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                    <span style={{ fontSize: '11px', fontWeight: 700 }}>Pro</span>
                </div>
            </div>

            {/* Balance */}
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <div style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Available Balance</div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                    style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px', marginTop: '4px', textShadow: '0 0 40px rgba(147, 51, 234, 0.4)' }}
                >
                    $4,250.80
                </motion.div>
            </div>

            {/* Glass Virtual Card */}
            <motion.div
                animate={{ rotateY: [-2, 2, -2], rotateX: [2, -2, 2] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: '100%', height: '180px', margin: '24px 0', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(79, 70, 229, 0.1) 100%)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
            >
                <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.4) 0%, transparent 60%)', filter: 'blur(40px)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '20px', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-1px' }}>NOVA</div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#ef4444', opacity: 0.8 }}></div>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#eab308', opacity: 0.8, marginLeft: '-12px' }}></div>
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', marginBottom: '4px' }}>CARD NUMBER</div>
                        <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '2px' }}>**** 4921</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>09/27</div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
                {[
                    { icon: <ArrowUpRight size={16} />, label: 'Send', bg: '#9333ea', col: '#fff' },
                    { icon: <ArrowRightLeft size={16} />, label: 'Request', bg: '#27272a', col: '#fff' },
                    { icon: <QrCode size={16} />, label: 'Scan', bg: '#27272a', col: '#fff' },
                    { icon: <CreditCard size={16} />, label: 'Add', bg: '#27272a', col: '#fff' },
                ].map((action, i) => (
                    <motion.div whileTap={{ scale: 0.95 }} key={i} style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '6px', padding: '12px 16px', borderRadius: '30px', backgroundColor: action.bg, color: action.col, fontWeight: 700, fontSize: '13px' }}>
                        {action.icon} {action.label}
                    </motion.div>
                ))}
            </div>

            {/* Transactions */}
            <div style={{ flex: 1, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 700 }}>Recent Friends</div>
                    <div style={{ fontSize: '12px', color: '#9333ea', fontWeight: 600 }}>See All</div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                    {[
                        { name: 'Sarah M.', amount: '-$24.50', desc: 'Coffee run', time: '2m ago', col: '#f43f5e' },
                        { name: 'James T.', amount: '+$150.00', desc: 'Weekend dinner split', time: '1h ago', col: '#22c55e' }
                    ].map((tx, i) => (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            key={i}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#18181b', borderRadius: '16px', marginBottom: '8px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <User size={18} color="#a1a1aa" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 700 }}>{tx.name}</div>
                                    <div style={{ fontSize: '12px', color: '#a1a1aa' }}>{tx.desc} - {tx.time}</div>
                                </div>
                            </div>
                            <div style={{ fontSize: '15px', fontWeight: 800, color: tx.col }}>{tx.amount}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const LuminaLearnUI = () => {
    const sidebarItems = [
        { icon: <Activity size={16} />, label: 'Dashboard', active: true },
        { icon: <Play size={16} />, label: 'My Courses', active: false },
        { icon: <CheckCircle2 size={16} />, label: 'Certificates', active: false },
        { icon: <Zap size={16} />, label: 'Challenges', active: false },
        { icon: <Bell size={16} />, label: 'Updates', active: false },
    ]

    const courses = [
        { title: 'React Advanced Patterns', sub: 'Component composition & hooks', progress: 72, lessons: '18/25', color: '#f97316', gradient: 'linear-gradient(135deg, #fb923c, #ea580c)', instructor: 'Sarah Chen' },
        { title: 'System Design 101', sub: 'Scalable architecture basics', progress: 45, lessons: '9/20', color: '#8b5cf6', gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)', instructor: 'Priya Sharma' },
        { title: 'TypeScript Mastery', sub: 'Advanced types & generics', progress: 100, lessons: '30/30', color: '#10b981', gradient: 'linear-gradient(135deg, #34d399, #059669)', instructor: 'Mark Liu' },
    ]

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#0c0c0f', display: 'flex', overflow: 'hidden', fontFamily: 'var(--font-sans)', color: '#fff' }}>

            {/* Dark Sidebar */}
            <div style={{ width: '240px', backgroundColor: '#111114', borderRight: '1px solid #1e1e24', padding: '28px 16px', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingLeft: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #f97316, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '13px' }}>L</div>
                    <span style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.5px', color: '#fff' }}>Lumina</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#f97316', backgroundColor: '#f9731615', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>PRO</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                    {sidebarItems.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '10px', backgroundColor: item.active ? '#f9731618' : 'transparent', color: item.active ? '#f97316' : '#6b6b76', fontWeight: 600, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}>
                            {item.icon}
                            {item.label}
                            {item.active && <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#f97316', marginLeft: 'auto' }}></div>}
                        </div>
                    ))}
                </div>

                {/* Sidebar Streak + Pro Upgrade */}
                <div style={{ background: 'linear-gradient(135deg, #1a1520, #1e1328)', borderRadius: '16px', padding: '20px', border: '1px solid #2a2535', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', position: 'relative' }}>
                        <Flame size={18} color="#f97316" fill="#f97316" />
                        <span style={{ fontSize: '24px', fontWeight: 900, color: '#f97316' }}>14</span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#78716c' }}>days</span>
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#a8a29e', position: 'relative' }}>Best streak: 21 days</div>
                    <div style={{ display: 'flex', gap: '3px', marginTop: '8px', position: 'relative' }}>
                        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                            <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: i < 5 ? '#f97316' : '#2a2535' }}></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                {/* Top Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid #1e1e24', backgroundColor: '#111114', flexShrink: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '320px', height: '36px', borderRadius: '10px', backgroundColor: '#1a1a1f', border: '1px solid #2a2a32', display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: '12px', color: '#6b6b76' }}>
                            Search courses, topics, instructors...
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#1a1a1f', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #2a2a32' }}>
                            <Bell size={16} color="#6b6b76" />
                            <div style={{ position: 'absolute', top: '6px', right: '6px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f97316' }}></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '4px 12px 4px 4px', borderRadius: '10px', backgroundColor: '#1a1a1f', border: '1px solid #2a2a32' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #f97316, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <User size={14} color="#fff" />
                            </div>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#d4d4d8' }}>Alex P.</span>
                            <ChevronDown size={14} color="#6b6b76" />
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ flex: 1, overflow: 'auto', padding: '28px 32px', backgroundColor: '#0c0c0f' }}>

                    {/* Hero Continue Learning Banner */}
                    <motion.div
                        initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                        style={{ background: 'linear-gradient(135deg, #1a1520 0%, #1e1328 50%, #1a1a2e 100%)', borderRadius: '20px', padding: '28px 32px', marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #2a2535', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', top: '0', right: '0', width: '300px', height: '100%', background: 'radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}></div>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Continue Learning</div>
                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', marginBottom: '6px' }}>React Advanced Patterns</div>
                            <div style={{ fontSize: '12px', color: '#6b6b76', marginBottom: '16px' }}>Chapter 12: Custom Hook Patterns - 42 min remaining</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#fff', fontSize: '13px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(249,115,22,0.3)' }}>
                                    <Play size={14} fill="#fff" /> Resume
                                </div>
                                <div style={{ width: '140px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginBottom: '4px' }}>
                                        <span style={{ color: '#6b6b76' }}>Progress</span>
                                        <span style={{ color: '#f97316', fontWeight: 700 }}>72%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '4px', backgroundColor: '#2a2535', borderRadius: '2px', overflow: 'hidden' }}>
                                        <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.2, delay: 0.3 }} style={{ height: '100%', background: 'linear-gradient(90deg, #f97316, #fb923c)', borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Circular Progress Ring */}
                        <div style={{ position: 'relative', width: '90px', height: '90px', flexShrink: 0, zIndex: 1 }}>
                            <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: 'rotate(-90deg)' }}>
                                <circle cx="45" cy="45" r="38" fill="none" stroke="#2a2535" strokeWidth="6" />
                                <motion.circle
                                    initial={{ strokeDasharray: '0 1000' }} animate={{ strokeDasharray: '172 1000' }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    cx="45" cy="45" r="38" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round"
                                />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>18</div>
                                <div style={{ fontSize: '9px', color: '#6b6b76', fontWeight: 600 }}>/25 Lessons</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '28px' }}>
                        {[
                            { label: 'Total XP', value: '2,850', icon: <Zap size={16} />, color: '#f97316', bg: '#f9731612' },
                            { label: 'Completed', value: '12', icon: <CheckCircle2 size={16} />, color: '#10b981', bg: '#10b98112' },
                            { label: 'Hours', value: '47.5', icon: <Timer size={16} />, color: '#8b5cf6', bg: '#8b5cf612' },
                            { label: 'Rank', value: '#24', icon: <ArrowUpRight size={16} />, color: '#3b82f6', bg: '#3b82f612' },
                        ].map((stat, i) => (
                            <motion.div
                                initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }}
                                key={i}
                                style={{ backgroundColor: '#111114', borderRadius: '14px', padding: '18px', border: '1px solid #1e1e24' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <span style={{ fontSize: '11px', color: '#6b6b76', fontWeight: 600 }}>{stat.label}</span>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', backgroundColor: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>{stat.icon}</div>
                                </div>
                                <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>{stat.value}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Course Cards */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Your Courses</div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {['All', 'Active', 'Done'].map((tab, i) => (
                                <div key={i} style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 700, backgroundColor: i === 0 ? '#f9731618' : '#111114', color: i === 0 ? '#f97316' : '#6b6b76', border: `1px solid ${i === 0 ? '#f9731630' : '#1e1e24'}`, cursor: 'pointer' }}>{tab}</div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                        {courses.map((course, i) => (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15 * i }}
                                key={i}
                                style={{ backgroundColor: '#111114', borderRadius: '16px', border: '1px solid #1e1e24', cursor: 'pointer', overflow: 'hidden' }}
                            >
                                {/* Colored Header */}
                                <div style={{ height: '80px', background: course.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.4) 100%)' }}></div>
                                    <Play size={28} color="rgba(255,255,255,0.9)" fill="rgba(255,255,255,0.3)" style={{ position: 'relative', zIndex: 1 }} />
                                    <div style={{ position: 'absolute', top: '8px', right: '8px', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', fontSize: '9px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px', zIndex: 1 }}>
                                        {course.progress === 100 ? 'DONE' : `${course.progress}%`}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div style={{ padding: '16px' }}>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#e4e4e7', marginBottom: '4px', letterSpacing: '-0.2px' }}>{course.title}</div>
                                    <div style={{ fontSize: '11px', color: '#52525b', marginBottom: '14px' }}>{course.sub}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: course.gradient }}></div>
                                            <span style={{ fontSize: '10px', color: '#6b6b76', fontWeight: 600 }}>{course.instructor}</span>
                                        </div>
                                        <span style={{ fontSize: '10px', color: '#52525b', fontWeight: 600 }}>{course.lessons}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '3px', backgroundColor: '#1e1e24', borderRadius: '2px', overflow: 'hidden', marginTop: '12px' }}>
                                        <motion.div initial={{ width: 0 }} animate={{ width: `${course.progress}%` }} transition={{ duration: 1, delay: 0.4 + (0.15 * i) }} style={{ height: '100%', background: course.gradient, borderRadius: '2px' }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ISLTranslatorUI = () => {
    const [screen, setScreen] = useState('splash')
    const [activeTab, setActiveTab] = useState('home')

    useEffect(() => {
        const timer = setTimeout(() => {
            setScreen('main')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-sans)', color: '#111', display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
                {screen === 'splash' && (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        style={{ position: 'absolute', inset: 0, backgroundColor: '#f97316', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 50 }}
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, ease: "linear", repeat: Infinity }}>
                            <RefreshCw size={48} color="#fff" />
                        </motion.div>
                        <div style={{ fontSize: '28px', fontWeight: 800, marginTop: '20px', letterSpacing: '-1px' }}>SignVoice</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, opacity: 0.8, marginTop: '8px' }}>Bridging the gap</div>
                    </motion.div>
                )}

                {screen === 'translate' && (
                    <motion.div
                        key="translate"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', backgroundColor: '#111', zIndex: 40 }}
                    >
                        {/* Camera Placeholder */}
                        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #111, #2a1b12)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
                                    <div style={{ width: '200px', height: '200px', border: '2px dashed #f97316', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ fontSize: '12px', color: '#f97316', fontWeight: 600, letterSpacing: '1px' }}>DETECTING HAND...</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Back Button */}
                            <div
                                onClick={() => setScreen('main')}
                                style={{ position: 'absolute', top: '24px', left: '24px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <ArrowRightLeft size={20} color="#fff" />
                            </div>
                        </div>

                        {/* Translation Output Sheet */}
                        <motion.div
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.2 }}
                            style={{ height: '220px', backgroundColor: '#fff', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', padding: '30px 24px', display: 'flex', flexDirection: 'column', position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '4px', borderRadius: '2px', backgroundColor: '#e5e7eb' }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '1px' }}>Translation</div>
                                <motion.div whileTap={{ scale: 0.9 }} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                    <Volume2 size={20} color="#f97316" />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <div style={{ fontSize: '28px', fontWeight: 800, color: '#111', lineHeight: 1.2 }}>
                                    Hello, how are you today?
                                </div>
                                <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                                    Continuous translation active
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}

                {screen === 'main' && (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                        {/* Main Content Area based on Active Tab */}
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {activeTab === 'home' && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ paddingBottom: '20px' }}>
                                    {/* Header */}
                                    <div style={{ padding: '30px 24px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', color: '#111' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', fontWeight: 700 }}>A</div>
                                            <div>
                                                <div style={{ fontSize: '14px', fontWeight: 500, color: '#6b7280' }}>Good Morning,</div>
                                                <div style={{ fontSize: '20px', fontWeight: 800 }}>Avdhoot</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111' }}>
                                            <Bell size={18} />
                                        </div>
                                    </div>

                                    {/* Primary Action */}
                                    <div style={{ padding: '0 24px' }}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setScreen('translate')}
                                            style={{ backgroundColor: '#f97316', borderRadius: '24px', padding: '24px', boxShadow: '0 10px 30px rgba(249,115,22,0.2)', display: 'flex', flexDirection: 'column', gap: '16px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                                        >
                                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                                            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}>
                                                <Camera size={28} color="#fff" />
                                            </div>
                                            <div style={{ color: '#fff' }}>
                                                <div style={{ fontSize: '20px', fontWeight: 700 }}>Start Live Translation</div>
                                                <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '4px' }}>Sign to Text & Speech instantly</div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Carousel Section */}
                                    <div style={{ marginTop: '30px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', marginBottom: '16px' }}>
                                            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Recent Translations</h3>
                                            <span style={{ fontSize: '13px', color: '#f97316', fontWeight: 600 }}>View All</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: '16px', padding: '0 24px', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
                                            {[
                                                { text: "Good morning", time: "2m ago" },
                                                { text: "Thank you", time: "1h ago" },
                                                { text: "How are you", time: "3h ago" }
                                            ].map((item, i) => (
                                                <div key={i} style={{ minWidth: '160px', backgroundColor: '#fff7ed', borderRadius: '16px', padding: '16px', border: '1px solid #ffedd5' }}>
                                                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                                        <MessageSquare size={16} color="#c2410c" />
                                                    </div>
                                                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#9a3412', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.text}</div>
                                                    <div style={{ fontSize: '12px', color: '#fb923c' }}>{item.time}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Daily Goal */}
                                    <div style={{ padding: '0 24px', marginTop: '30px' }}>
                                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '20px', padding: '20px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '4px solid #f97316', borderTopColor: '#fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Flame size={20} color="#f97316" />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '15px', fontWeight: 700 }}>5 Day Streak!</div>
                                                <div style={{ fontSize: '13px', color: '#64748b' }}>Complete 1 more lesson</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab !== 'home' && (
                                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', height: '100%' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚧</div>
                                        <div style={{ fontSize: '18px', fontWeight: 600 }}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Feed</div>
                                        <div style={{ fontSize: '14px', marginTop: '8px' }}>Module in development</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom App Bar */}
                        <div style={{ padding: '16px 24px', backgroundColor: '#fff', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '30px' }}>
                            {[
                                { id: 'home', icon: <User size={24} /> /* Reusing User as Home icon equivalent for now or Activity */ },
                                { id: 'translate', icon: <Camera size={24} /> },
                                { id: 'learn', icon: <MessageSquare size={24} /> },
                                { id: 'profile', icon: <Settings size={24} /> }
                            ].map((tab) => {
                                // Overriding icons to match request nicely
                                let Icon = Activity;
                                if (tab.id === 'home') Icon = User;
                                if (tab.id === 'translate') Icon = ArrowRightLeft;
                                if (tab.id === 'learn') Icon = MessageSquare;
                                if (tab.id === 'profile') Icon = Settings;

                                const isActive = activeTab === tab.id;

                                return (
                                    <div
                                        key={tab.id}
                                        onClick={() => tab.id === 'translate' ? setScreen('translate') : setActiveTab(tab.id)}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', color: isActive ? '#f97316' : '#9ca3af' }}
                                    >
                                        <motion.div whileTap={{ scale: 0.9 }}>
                                            <Icon size={24} color={isActive ? '#f97316' : '#9ca3af'} />
                                        </motion.div>
                                        {isActive && <motion.div layoutId="nav-pill" style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#f97316', marginTop: '2px' }} />}
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
