import { useState, useEffect, useCallback } from 'react'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export const useTextScramble = (finalText, options = {}) => {
    const { speed = 30, delay = 0, scrambleDuration = 1500 } = options
    const [displayText, setDisplayText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        let timeout
        let interval
        const startTime = Date.now()

        timeout = setTimeout(() => {
            interval = setInterval(() => {
                const elapsed = Date.now() - startTime - delay
                const progress = Math.min(elapsed / scrambleDuration, 1)
                const revealedCount = Math.floor(progress * finalText.length)

                let result = ''
                for (let i = 0; i < finalText.length; i++) {
                    if (finalText[i] === ' ') {
                        result += ' '
                    } else if (i < revealedCount) {
                        result += finalText[i]
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)]
                    }
                }

                setDisplayText(result)

                if (progress >= 1) {
                    setDisplayText(finalText)
                    setIsComplete(true)
                    clearInterval(interval)
                }
            }, speed)
        }, delay)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [finalText, speed, delay, scrambleDuration])

    return { displayText, isComplete }
}

export default useTextScramble
