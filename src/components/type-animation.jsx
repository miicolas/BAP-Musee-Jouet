import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationEffect({ response, animateKey }) {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-20 max-w-sm bg-amber-700 z-50 flex justify-center items-center p-6">
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
        <p>Aucune question n'a été répondu à pour l'instant.</p>
      )}
    </div>
  );
}
