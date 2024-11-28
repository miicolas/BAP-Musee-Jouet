import React, { useState } from "react";
import { Star } from "lucide-react";

const StarRating = ({ handleLike }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="flex items-center justify-center">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                                setRating(ratingValue);
                                handleLike(ratingValue);
                            }}
                            className="hidden"
                        />
                        <Star
                            className="cursor-pointer"
                            size={100}
                            fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            color={"rgb(234 179 8)"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default function ModalNotices() {
    const [isOpen, setIsOpen] = useState(true);

    const handleLike = async (rating) => {
        console.log(rating);

        await fetch(`${import.meta.env.VITE_SOCKET_URL}/api/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ rating })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setIsOpen(false);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <>
            {isOpen && (
                <div>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="min-w-[100vh] min-h-[50vh] p-8 rounded-3xl flex justify-center items-center flex-col gap-4 backdrop-blur-3xl border-8 border-yellow-500 shadow-xl bg-white/10">
                            <button onClick={() => setIsOpen(false)} className="self-end text-xl font-bold text-red-500">
                                &times;
                            </button>
                            <h1 className="text-4xl font-bold text-yellow-500">Avis</h1>
                            <div className="mt-4">
                                <StarRating handleLike={handleLike} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}