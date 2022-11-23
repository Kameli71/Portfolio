import { v4 as uuidv4 } from 'uuid';
import Deadpool from '../images/deadpool.jpg';
import Ecommerce from '../images/ecommerce.jpg';
import Cv from '../images/Cv.jpg';
import Movie from '../images/movie.jpg';
import Cesar from '../images/cesar.jpg';
import Blog from '../images/blog.jpg';
import Hangman from '../images/hangman.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Jeu du pendu',
    desc: 'Petit projet initiation TypeScript, Jeu du pendu, sous React/CSS/TS',
    img: Hangman,
    link: 'https://deadpool-agency-licorn.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Deadpool agency',
    desc:
      'Mon premier baby site web fictif pour réserver les services de deadpool, Deadpool agency, sous HTML/CSS/JS',
    img: Deadpool,
    link: 'https://deadpool-agency-licorn.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Eapp',
    desc:
      'Projet de site ecommerce(partie front/Backend sur mon github), sous React/JS/Redux/MongoDb',
    img: Ecommerce,
    link: 'https://ecommerce-front-template.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'CV React',
    desc: 'CV sous React',
    img: Cv,
    link: 'https://cv-karim-kameli.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Ave César',
    desc:
      'Site réalisé lors de notre premier hackathon 24h non responsive, sous React/JS',
    img: Cesar,
    link: 'https://ave-cesar.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Movies',
    desc:
      "Création d'un site de service de vidéos à la demande en utilisant une API sous React/JS",
    img: Movie,
    link: 'https://cine-plus.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Blog',
    desc:
      "Template d'un blog personnel avec profil utilisateur et ajout de stories, sous React/JS",
    img: Blog,
    link: 'https://template-blog71.netlify.app',
  },
];

export default projects;
