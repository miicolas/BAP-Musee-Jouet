import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const questions = [
    {
        avatars: [
            {
                id: 1,
                name: "Barbie",
                questions: [
                    {
                        id: 1,
                        question: "Qui est Barbie ?",
                        answer:
                            "Barbie est un personnage iconique connu pour sa mode et son style.",
                        sound: "bizon",
                    },
                    {
                        id: 2,
                        question: "Que peut faire Barbie ?",
                        answer:
                            "Barbie peut se transformer en plusieurs rôles, y compris médecin, astronaute, et bien plus encore.",
                        sound: "meow",
                    },
                    {
                        id: 3,
                        question: "Pourquoi Barbie est-elle populaire ?",
                        answer:
                            "Barbie est populaire en raison de sa capacité à inspirer la créativité et à encourager les jeunes à explorer diverses carrières.",
                        sound: "minecraft",
                    },
                    {
                        id: 4,
                        question: "Comment Barbie se transforme-t-elle ?",
                        answer:
                            "Barbie se transforme en plusieurs rôles, y compris médecin, astronaute, et bien plus encore.",
                        sound: "meow",
                    },
                    {
                        id: 5,
                        question: "Pourquoi Barbie est-elle populaire ?",
                        answer:
                            "Barbie est populaire en raison de sa capacité à inspirer la créativité et à encourager les jeunes à explorer diverses carrières.",
                        sound: "minecraft",
                    },
                    {
                        id: 6,
                        question: "Comment Barbie se transforme-t-elle ?",
                        answer:
                            "Barbie se transforme en plusieurs rôles, y compris médecin, astronaute, et bien plus encore.",
                        sound: "meow",
                    },
                ],
            },
            {
                id: 2,
                name: "Lego",
                questions: [
                    {
                        id: 1,
                        question: "Qu'est-ce que Lego ?",
                        answer:
                            "Lego est une marque de jouets de construction, célèbre pour ses blocs colorés qui se connectent.",
                    },
                    {
                        id: 2,
                        question: "Que peut-on construire avec Lego ?",
                        answer:
                            "On peut construire une variété d'objets, y compris des bâtiments, des véhicules, et même des paysages entiers.",
                    },
                    {
                        id: 3,
                        question: "Pourquoi Lego est-il populaire ?",
                        answer:
                            "Lego est populaire car il stimule la créativité et permet aux gens de créer des choses de leurs propres mains.",
                    },
                ],
            },
            {
                id: 3,
                name: "Mario",
                questions: [
                    {
                        id: 1,
                        question: "Qui est Mario ?",
                        answer:
                            "Mario est le personnage principal des jeux vidéo créés par Nintendo, connu pour sa lutte contre Bowser.",
                    },
                    {
                        id: 2,
                        question: "Quel est le but du jeu Mario ?",
                        answer:
                            "Le but est souvent de sauver la princesse Peach et de vaincre les ennemis tout au long des niveaux.",
                    },
                    {
                        id: 3,
                        question: "Pourquoi Mario est-il une icône des jeux vidéo ?",
                        answer:
                            "Mario est une icône en raison de sa longévité, sa popularité et son rôle dans la popularisation des jeux vidéo.",
                    },
                ],
            },
        ],
    },
];

export const avatars = [
    {
        id: 1,
        name: "Barbie",
        description: "Barbie est une des plus grandes idées de l'époque. Elle est un robot de mode, qui peut se transformer en femme, en homme ou en animal. Elle est très intelligente et elle peut parfois se faire des idées et des rêves.",
        image: "https://gallerypng.com/wp-content/uploads/2024/07/hot-barbie-png-image.png",

    },
    {
        id: 2,
        name: "Lego",
        description: "Lego est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
        image: "https://png.pngtree.com/png-clipart/20230914/original/pngtree-lego-minifigure-vector-png-image_12154297.png",

    }
    ,
    {
        id: 3,
        name: "Mario",
        description: "Mario est un des plus grands jeux vidéo de l'époque. Il a été créé par Nintendo et il a été le plus populaire des jeux vidéo de l'époque. Il est très populaire aujourd'hui et il est devenu un des plus grands dessinateurs de jeux vidéo.",
        image: "https://i.pinimg.com/originals/e8/bb/b7/e8bbb719dff7201aa84de5495a9c8908.png",
    },

];


export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}