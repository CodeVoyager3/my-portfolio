import React, { useState, useEffect } from "react";

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];

            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    setDisplayText(prev => prev + currentText.charAt(charIndex));
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(prev => prev.slice(0, -1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex(prev => (prev + 1) % texts.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

    return (
        <span className="font-mono">
            {displayText}
            <span className="animate-blink-cursor">|</span>
        </span>
    );
};

export default Typewriter;