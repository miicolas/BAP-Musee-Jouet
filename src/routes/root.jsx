import { Link } from "react-router-dom";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center flex-col items-center h-screen bg-gray-50">
        <h1 className="text-5xl	font-bold uppercase">Page d'accueil Admin</h1>
        <h2 className="text-3xl font-semibold p-12">Choix de l'écran :</h2>
        <div className="flex flex-row items-center my-12">
          <Link to="/avatar">
            <button className="px-4 py-2 font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-700 mx-8 w-64 h-20 text-lg shadow-md shadow-yellow-700 hover:shadow-amber-900 transition-all duration-500">
              Affichage de l'avatar
            </button>
          </Link>
          <Link to="/choice-avatar">
            <button className="px-4 py-2 font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-700 mx-8 w-64 h-20 text-lg shadow-md shadow-yellow-700 hover:shadow-amber-900 transition-all duration-500">
              Choix de l'avatar + Questions
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
