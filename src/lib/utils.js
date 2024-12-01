import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const merge = twMerge;
export const cn = clsx;

export const questions = [
  {
    avatars: [
      {
        id: 1,
        name: "Sophie la Girafe",
        questions: [
          {
            id: 1,
            question: "Quand as-tu été créée ?",
            answer: "J’ai été créée le 25 mai 1961,  il y a plus de 60 ans.",
            sound: "bizon",
          },
          {
            id: 2,
            question: "Qui t’a inventée ?",
            answer:
              "C’est Monsieur Rampeau qui m’a inventé pour la marque Delacoste, spécialiste des jouets en caoutchouc. Aujourd’hui, c’est devenu Vulli.",
            sound: "meow",
          },
          {
            id: 3,
            question: "Où étais-tu fabriquée ?",
            answer:
              "J’étais fabriquée dans une usine à Asnières-sur-Oise, près de Paris. Je suis toujours fabriquée en France aujourd’hui mais je suis maintenant dans les Alpes, en Haute-Savoie.",
            sound: "minecraft",
          },
          {
            id: 4,
            question: "En quelle matière es-tu fabriquée ?",
            answer:
              "Je suis faite en caoutchouc et je suis peinte à la main au pochoir.",
            sound: "minecraft",
          },
          {
            id: 5,
            question: "Pourquoi les bébés t’aiment-ils autant ?",
            answer:
              "Les bébés m’adorent car je les aide à “faire leurs dents” et je sers également à développer leurs sens, tels que l’ouïe ou encore le toucher.",
            sound: "minecraft",
          },
          {
            id: 6,
            question: "Quel bruit fais-tu lorsqu’on t’appuie dessus?",
            answer:
              "Je fais un “pouet” grâce à un système de sifflet. Il est devenu iconique aujourd’hui. Dans les années 50-60, les jouets couineurs comme moi étaient des nouveautés très à la mode !",
            sound: "minecraft",
          },
          {
            id: 7,
            question: "D’où vient le nom de Sophie ?",
            answer:
              "J’ai été inventé un 25 mai, date de la Sainte Sophie donc mes créateurs ont décidé de me donner ce nom.",
            sound: "minecraft",
          },
          {
            id: 8,
            question:
              "Pourquoi ton créateur a-t-il choisi une girafe et pas un animal domestique ?",
            answer:
              "Avec mon long cou, les bébés m’attrapent facilement ! Et puis, à 3 mois, ils ne voient pas bien les couleurs mais seulement les contrastes, les différences entre les couleurs foncées et claires. Les tâches marrons sur ma peau blanche lui permettent de bien me reconnaître. J’en ai 76 !",
            sound: "minecraft",
          },
          {
            id: 9,
            question: "Es-tu toujours la même depuis ta création ?",
            answer:
              "J’ai vieilli mais je n’ai pas changé ! Cela fait 60 ans que je mesure 18 cm. Avant moi, il y a eu Zoé, une girafe de 46 cm. Mais elle était trop grande pour les bébés. Je l’ai remplacée avec succès !",
            sound: "minecraft",
          },
          {
            id: 10,
            question: "Combien de Sophie ont été vendues dans le monde ?",
            answer:
              "Depuis ma création, j’ai été vendue à plus de 70 millions d’exemplaires dans plus de 85 pays dans le monde.",
            sound: "minecraft",
          },
        ],
      },
      {
        id: 2,
        name: "Playmobil",
        questions: [
          {
            id: 1,
            question: "Quand as-tu été créé ?",
            answer:
              "J’ai été créé en 1974, il y a plus de 50 ans. Moi, je suis un modèle de 1986.",
          },
          {
            id: 2,
            question: "Où as-tu été imaginé ?",
            answer:
              "J’ai été imaginé en Allemagne, près de Nuremberg, la capitale du jouet européen depuis le XIVe siècle.",
          },
          {
            id: 3,
            question: "Qui t’a inventé ?",
            answer:
              "Ce sont les Allemands Hans Beck et Horst Brandstätter qui m’ont inventé. Ils avaient déjà connu le succès, à la fin des années 50, avec le cerceau en plastique du Hoola Hoop.",
          },
          {
            id: 4,
            question: "Pourquoi es-tu si petit ?",
            answer:
              "Mes inventeurs ont décidé de créer des jouets plus petits pour utiliser moins de plastique car il était devenu très cher à cause de la crise pétrolière de 1973 ! Je mesure 7,5 cm, c’est la taille idéale pour tenir dans la main d’un enfant.",
          },
          {
            id: 5,
            question: "Pourquoi tu n’as pas de nez ?",
            answer:
              "Je n’ai pas de nez car mes créateurs voulaient faire un visage simple sans trop de détails, comme s’il avait été dessiné par un enfant.",
          },
          {
            id: 6,
            question: "Pourquoi tu t’appelles Playmobil ?",
            answer:
              "Mon nom vient des 2 mots anglais : play” qui veut dire “jouer” et “mobil” qui veut dire “mobile”, “action”. Avant, on nous appelait Klicky.",
          },
          {
            id: 7,
            question:
              "Quels sont les premiers personnages Playmobil qui ont été créés ?",
            answer:
              "Au début, il n’y avait que des hommes : le chevalier, l’Amérindien et l’ouvrier. Mes créateurs avaient déjà pensé à ajouter des accessoires comme des chapeaux ou des épées mais il y avait peu de possibilités.",
          },
          {
            id: 8,
            question:
              "Quand les Playmobils femmes et enfants ont-ils été créés ?",
            answer:
              "Très rapidement ! Dès 1976, les femmes Playmobils ont été créées. Puis, en 1981, c’est le tour des enfants qui sont plus petits que moi. Et en 1984, ce sont les bébés.",
          },
          {
            id: 9,
            question: "Les Playmobils ont-ils toujours été articulés ?",
            answer:
              "Oui mais à notre création, nous avions que 4 articulations : la tête, les 2 bras et nous pouvions nous pencher en avant. C’est seulement en 1982 qu’on a pu tourner nos mains.",
          },
        ],
      },
      {
        id: 3,
        name: "Kiki",
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
    name: "Sophie la Girafe",
    description:
      "Sophie la Girafe est une des plus grandes idées de l'époque. Elle est un robot de mode, qui peut se transformer en femme, en homme ou en animal. Elle est très intelligente et elle peut parfois se faire des idées et des rêves.",
    image:
      "https://gallerypng.com/wp-content/uploads/2024/07/hot-barbie-png-image.png",
  },
  {
    id: 2,
    name: "Playmobil",
    description:
      "Playmobil est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des animaux, des personnages et des jeux. Il a également créé des produits pour la santé, la beauté et la mode.",
    image:
      "https://png.pngtree.com/png-clipart/20230914/original/pngtree-lego-minifigure-vector-png-image_12154297.png",
  },
  {
    id: 3,
    name: "Kiki",
    description:
      "Kiki est un des plus grands inventeurs de l'époque. Il a créé des objets de toutes sortes, des robots, des véhicules, des anim",
    image:
      "https://i.pinimg.com/originals/e8/bb/b7/e8bbb719dff7201aa84de5495a9c8908.png",
  },
];
