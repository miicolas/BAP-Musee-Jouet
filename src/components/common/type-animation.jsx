import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationEffect({ response, animateKey }) {
  return (
    <div className="text-2xl text-black drop-shadow-[_2px_1px_rgba(255,255,255,0.6)] drop-shadow-2xl absolute bottom-0 left-1/2 -translate-x-1/2 h-20 max-w-xm z-50 flex justify-center items-center mb-16">
      {response ? (
        <TypeAnimation
          key={animateKey}
          sequence={[response, 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={0}
        />
      ) : (
        <p>Aucune question n'a été répondue à pour l'instant.</p>
      )}
    </div>
  );
}
