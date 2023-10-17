import { useState, useEffect } from 'react';
import background from '../images/background.png';

function Banner() {
    const fullText = "O CAMINHO PARA SEU FUTURO COMEÇA COM A SOLUÇÃO CERTA.";
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText((prev) => prev + fullText[charIndex]);
            setCharIndex((prev) => prev + 1);

            if (charIndex === fullText.length - 1) {
                setIsTyping(false);
            }
        }, 150);

        if (!isTyping) {
            clearInterval(intervalId);
            setTimeout(() => {
                setText('');
                setCharIndex(0);
                setIsTyping(true);
            }, 1500);
        }

        return () => clearInterval(intervalId);
    }, [fullText, charIndex, isTyping]);

    return (
        <section className="banner" style={{backgroundImage: `url(${background})`}}>
            <h1>{text}</h1>
        </section>
    );
}

export default Banner;
