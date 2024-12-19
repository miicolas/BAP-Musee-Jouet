import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useState } from "react";

export default function NoticesStars({ openModal }) {
  const [isLiked, setIsLiked] = useState(false);

  // Handle the like button click
  const handleLike = () => {
    openModal();
    setIsLiked(true);
  };

  return (
    <motion.button
      onClick={isLiked ? null : handleLike}
      className={`w-fit px-10 py-5 h-auto text-2xl font-medium flex items-center justify-center rounded-full shadow-btnshadow mx-auto transition-colors duration-300 absolute bottom-10 right-10 ${isLiked ? "bg-yellow-600" : "bg-yellow-500"}`}
      animate={isLiked ? "liked" : "unliked"}
    >
      {!isLiked ? (
        <Star size={24} className="text-yellow-400 fill-white" />
      ) : null}

      <div className="flex flex-col items-center">
        <motion.span
          variants={labelTextVariants}
          className={`${isLiked ? "pr-0 w-fit" : "pr-6 w-36"}`}
        >
          {isLiked ? "Merci" : "Votre avis"}
          <motion.span variants={successTextVariants} className="success">
            {isLiked ? " !" : ""}
          </motion.span>
        </motion.span>
      </div>
    </motion.button>
  );
}

const labelTextVariants = {
  unliked: { x: 24 },
  liked: { x: -5 },
};

const successTextVariants = {
  unliked: { opacity: 0, transition: { duration: 0.25 } },
  liked: { opacity: 1 },
};

const likedTransition = {
  duration: 0.25,
  delay: 0.5,
};
