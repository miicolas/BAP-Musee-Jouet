import Kiki from "../assets/images/kiki.png";
import Playmobil from "../assets/images/playmobil.png";
import Sophie from "../assets/images/sophie.png";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import KikiGif from "../assets/images/kiki.gif";
import PlaymobilGif from "../assets/images/playmobil.gif";
import SophieGif from "../assets/images/sophie.gif";

export const merge = twMerge;
export const cn = clsx;

export const questions = [
  {
    avatars: [
      {
        id: 1,
        name: "Playmobil",
        questions: [
          {
            id: 1,
            question: "Quand as-tu été créé ?",
            answer:
              "J’ai été créé en 1974, il y a plus de 50 ans. Moi, je suis un modèle de 1986.",
            sound: "p_1",
          },
          {
            id: 2,
            question: "Où as-tu été imaginé ?",
            answer:
              "J’ai été imaginé en Allemagne, près de Nuremberg, la capitale du jouet européen depuis le XIVe siècle.",
            sound: "p_2",
          },
          {
            id: 3,
            question: "Qui t’a inventé ?",
            answer:
              "Ce sont les Allemands Hans Beck et Horst Brandstätter qui m’ont inventé. Ils avaient déjà connu le succès, à la fin des années 50, avec le cerceau en plastique du Hula Hoop.",
            sound: "p_3",
          },
          {
            id: 4,
            question: "Pourquoi es-tu si petit ?",
            answer:
              "Mes inventeurs ont décidé de créer des jouets plus petits pour utiliser moins de plastique car il était devenu très cher à cause de la crise pétrolière de 1973 ! Je mesure 7,5 cm, c’est la taille idéale pour tenir dans la main d’un enfant.",
            sound: "p_4",
          },
          {
            id: 5,
            question: "Pourquoi tu n’as pas de nez ?",
            answer:
              "Je n’ai pas de nez car mes créateurs voulaient faire un visage simple sans trop de détails, comme s’il avait été dessiné par un enfant.",
            sound: "p_5",
          },
          {
            id: 6,
            question: "Pourquoi tu t’appelles Playmobil ?",
            answer:
              "Mon nom vient des 2 mots anglais : “play” qui veut dire “jouer” et “mobil” qui veut dire “mobile”, “action”. Avant, on nous appelait Klicky.",
            sound: "p_6",
          },
          {
            id: 7,
            question:
              "Quels sont les premiers personnages Playmobil qui ont été créés ?",
            answer:
              "Au début, il n’y avait que des hommes : le chevalier, l’Amérindien et l’ouvrier. Mes créateurs avaient déjà pensé à ajouter des accessoires comme des chapeaux ou des épées mais il y avait peu de possibilités.",
            sound: "p_7",
          },
          {
            id: 8,
            question:
              "Quand les Playmobils femmes et enfants ont-ils été créés ?",
            answer:
              "Très rapidement ! Dès 1976, les femmes Playmobils ont été créées. Puis, en 1981, c’est le tour des enfants qui sont plus petits que moi. Et en 1984, ce sont les bébés.",
            sound: "p_8",
          },
          {
            id: 9,
            question: "Les Playmobils ont-ils toujours été articulés ?",
            answer:
              "Oui mais à notre création, nous avions que 4 articulations : la tête, les 2 bras et nous pouvions nous pencher en avant. C’est seulement en 1982 qu’on a pu tourner nos mains.",
            sound: "p_9",
          },
          {
            id: 10,
            question: "Quel est le plus grand Playmobil qui a été créé ?",
            answer:
              "Mon plus grand copain mesure 5 mètres de haut. Tu peux le voir à l’occasion d’expositions particulières.",
            sound: "p_10",
          },
        ],
      },
      {
        id: 2,
        name: "Sophie la Girafe",
        questions: [
          {
            id: 1,
            question: "Quand as-tu été crée ?",
            answer: "J’ai été créée le 25 mai 1961, il y a plus de 60 ans.",
            sound: "s_1",
          },
          {
            id: 2,
            question: "Qui t’a inventée ?",
            answer:
              "C’est Monsieur Rampeau qui m’a inventée pour la marque Delacoste, spécialiste des jouets en caoutchouc. Aujourd’hui, c’est devenu Vulli.",
            sound: "s_2",
          },
          {
            id: 3,
            question: "Où étais-tu fabriquée ?",
            answer:
              "J’étais fabriquée dans une usine à Asnières-sur-Oise, près de Paris. Je suis toujours fabriquée en France aujourd’hui mais je suis maintenant dans les Alpes, en Haute-Savoie.",
            sound: "s_3",
          },
          {
            id: 4,
            question: "En quelle matière es-tu fabriquée ?",
            answer:
              "Je suis faite en caoutchouc et je suis peinte à la main au pochoir.",
            sound: "s_4",
          },
          {
            id: 5,
            question: "Pourquoi les bébés t’aiment-ils autant ?",
            answer:
              "Les bébés m’adorent car je les aide à “faire leurs dents” et je sers également à développer leurs sens, tels que l’ouïe ou encore le toucher.",
            sound: "s_5",
          },
          {
            id: 6,
            question: "Quel bruit fais-tu lorsqu’on t’appuie dessus ?",
            answer:
              "Je fais un “pouet” grâce à un système de sifflet. Il est devenu iconique aujourd’hui. Dans les années 50-60, les jouets couineurs comme moi étaient des nouveautés très à la mode !",
            sound: "s_6",
          },
          {
            id: 7,
            question: "D’où vient le nom de Sophie ?",
            answer:
              "J’ai été inventée un 25 mai, date de la Sainte Sophie donc mes créateurs ont décidé de me donner ce nom.",
            sound: "s_7",
          },
          {
            id: 8,
            question:
              "Pourquoi ton créateur a-t-il choisi une girafe et pas un animal domestique ?",
            answer:
              "Avec mon long cou, les bébés m’attrapent facilement ! Et puis, à 3 mois, ils ne voient pas bien les couleurs mais seulement les contrastes, les différences entre les couleurs foncées et claires. Les taches marrons sur ma peau blanche lui permettent de bien me reconnaître. J’en ai 76 !",
            sound: "s_8",
          },
          {
            id: 9,
            question: "Es-tu toujours la même depuis ta création ?",
            answer:
              "J’ai vieilli mais je n’ai pas changé ! Cela fait 60 ans que je mesure 18 cm. Avant moi, il y a eu Zoé, une girafe de 46 cm. Mais elle était trop grande pour les bébés. Je l’ai remplacée avec succès !",
            sound: "s_9",
          },
          {
            id: 10,
            question: "Combien de Sophie ont été vendues dans le monde ?",
            answer:
              "Depuis ma création, j’ai été vendue à plus de 70 millions d’exemplaires dans plus de 85 pays dans le monde.",
            sound: "s_10",
          },
        ],
      },
      {
        id: 3,
        name: "Kiki",
        questions: [
          {
            id: 1,
            question: "Quand as-tu été créé ?",
            answer: "J’ai été créé le 26 janvier 1974, il y a plus de 50 ans.",
            sound: "k_1",
          },
          {
            id: 2,
            question: "Où as-tu été imaginé ?",
            answer:
              "J’ai été imaginé à Tokyo, au Japon, le pays du Soleil Levant.",
            sound: "k_2",
          },
          {
            id: 3,
            question: "Qui t’a inventé ?",
            answer:
              "C’est Yoshiaru Washino qui m’a inventé pour la société Sekiguchi, un grand fabricant de poupées au Japon.",
            sound: "k_3",
          },
          {
            id: 4,
            question: "Quel est ton vrai nom ?",
            answer:
              'Mon vrai nom en japonais est "Montchit\'chi”. Il s’inspire des mots français “Mon petit” qu’on prononce “Mon puchi” en japonais. Il fait aussi allusion au mot anglais “monkey” qui veut dire singe et au son japonais “chu chu” que fait le bébé en suçant sa tétine car, comme tu as pu le voir, je suce mon pouce.',
            sound: "k_4",
          },
          {
            id: 5,
            question: "Portes-tu toujours les mêmes vêtements ?",
            answer:
              "Non, mes vêtements peuvent être changés à l’infini. Dès le début j’ai eu 12 tenues : salopette, jardinier, écolier, footballeur… J’ai des tenues de stars comme celle de Michael Jackson. Et j’ai même un costume de martien tout vert !",
            sound: "k_5",
          },
          {
            id: 6,
            question: "Quelle taille mesures-tu ?",
            answer:
              "Je mesure en général 19 cm de haut mais il existe maintenant les Bébichichis, des petits Kikis de 13 cm et des géants. Le plus grand mesure 75 cm !",
            sound: "k_6",
          },
          {
            id: 7,
            question: "Pourquoi t’appelle-t-on Kiki en France ?",
            answer:
              "Parce que mon nom japonais était difficile à prononcer donc mon fabricant français a voulu me donner un nom plus simple et plus vendeur. Il s’est inspiré du surnom qu’on donnait à un sportif français, Jean-Claude Killy, célèbre à l’époque car il avait gagné 3 médailles d’or en ski aux Jeux Olympiques de 1968.",
            sound: "k_7",
          },
          {
            id: 8,
            question: "Pourquoi es-tu un singe ?",
            answer:
              "Je suis un singe car nous sommes des animaux amusants, malicieux et adorables et cela plaît beaucoup aux petits enfants.",
            sound: "k_8",
          },
          {
            id: 9,
            question: "As-tu changé depuis ta création ?",
            answer:
              "Mon visage est peint à la main donc moi et mes copains, nous n’avons jamais été exactement pareils. Moi, j’ai les yeux bleus comme les premiers kikis mais depuis une trentaine d’années, mes copains ont les yeux marron. Certains ont même la fourrure en couleurs : rose, bleu…",
            sound: "k_9",
          },
          {
            id: 10,
            question: "Combien de Kiki ont été vendus ?",
            answer:
              "Depuis ma création, plus de 100 millions de Kikis ont été vendus dans le monde entier ! J’ai plus de 1000 copains avec des tenues différentes et ça plaît bien aux collectionneurs.",
            sound: "k_10",
          },
        ],
      },
    ],
  },
];

export const avatars = [
  {
    id: 1,
    name: "Playmobil",
    image: Playmobil,
    gif: PlaymobilGif,
  },
  {
    id: 2,
    name: "Sophie La Girafe",
    image: Sophie,
    gif: SophieGif,
  },
  {
    id: 3,
    name: "Kiki",
    image: Kiki,
    gif: KikiGif,
  },
];
