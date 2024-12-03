import {useState, useEffect} from "react";
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


export default function Avatar({avatarID}) {
    const [questionId, setQuestionId] = useState(null);

    const avatars = [
        {
            id: 1,
            name: "Playmobil",
            description:
                "Playmobile est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
            gltf: "/models/playmobile_v1.gltf",
        },
        {
            id: 2,
            name: "Sophie la girafe",
            description:
                "Lego est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
            gltf: "/models/sophie_girafe_v1.gltf",
        },
    ];

    const avatar = avatars.find((avatar) => avatar.id === avatarID);
    const gltf = avatar ? useLoader(GLTFLoader, avatar.gltf) : {scene: null};

    return (
        <>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]} intensity={1}/>
"
            {gltf && (
                <primitive object={gltf.scene} scale={3} position={[0, -2, 0]}/>
            )}

            {avatars.length === 0 ? (
                <p>Aucun avatar trouvé pour cet avatar.</p>
            ) : null}

        </>
    );
}
