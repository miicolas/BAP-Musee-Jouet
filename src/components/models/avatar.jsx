import {useState, useEffect} from "react";
import {useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'


export default function Avatar({avatarID}) {
    const [questionId, setQuestionId] = useState(null);

    const avatars = [
        {
            id: 1,
            name: "Barbie",
            description:
                "Barbie est une des plus grands idées de l'époque. Elle est un robot de mode, qui peut se transformer en femme, en homme ou en animal. Elle est très intelligente et elle peut parfois se faire des idées et des rêves.",
            gltf: "/models/sophie_girafe_v1.gltf",
        },
        {
            id: 2,
            name: "Lego",
            description:
                "Lego est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
            gltf: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/survivor-male/model.gltf",
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
