import {motion} from "motion/react"
import {Star} from "lucide-react";
import {useState, useEffect} from "react";

export default function NoticesStars() {

    const [isLiked, setIsLiked] = useState(false);
    
    const handleLike = () => {
        const response = fetch(`${import.meta.env.VITE_SOCKET_URL}/api/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        response.then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsLiked(true);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <motion.button
            onClick={isLiked ? null : handleLike}
            className="flex items-center px-4 py-2 justify-center min-w-max border-4 border-blue-700 absolute bottom-10 right-10"
            animate={isLiked ? "liked" : "unliked"} >
            {!isLiked ? (
                <Star size={24} className="text-yellow-500 fill-yellow-500" />
            ) : null}

            <div className="flex flex-col items-center">
                <motion.span variants={labelTextVariants} className="w-24">
                    Star
                    <motion.span variants={successTextVariants} className="success">
                        red
                    </motion.span>
                </motion.span>
            </div>
        </motion.button>
    );
}


const labelTextVariants = {
    unliked: { x: 24},
    liked: { x: -5 }
};

const successTextVariants = {
    unliked: { opacity: 0, transition: { duration: 0.25 } },
    liked: { opacity: 1, }
};

const likedTransition = {
    duration: 0.25,
    delay: 0.5
};