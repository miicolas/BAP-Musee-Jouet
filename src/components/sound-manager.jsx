import { useEffect, useState, useRef } from "react";

export default function SoundManager({ sound, play }) {
    const audioRef = useRef(null);
    const [currentAudio, setCurrentAudio] = useState(null);

    useEffect(() => {
        if (play && sound) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            const audio = new Audio(sound);
            setCurrentAudio(audio);
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, [sound, play]);

    return <audio ref={audioRef} />;
}