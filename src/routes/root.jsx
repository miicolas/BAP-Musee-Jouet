import { Link } from "react-router-dom";
import Layout from "../layout";
import {Button} from "../components/buttons";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center flex-col items-center h-screen bg-gray-50">
        <h1 className="text-5xl	font-bold uppercase">Page d'accueil Admin</h1>
        <h2 className="text-3xl font-semibold p-12">Choix de l'écran :</h2>
        <div className="flex flex-row items-center my-12 gap-10">
          <Link to="/avatar">
            <Button className=" font-bold text-white bg-yellow-600 hover:bg-yellow-700   shadow-yellow-700 hover:shadow-amber-900" styleType={"primary"}>
              Affichage de l'avatar
            </Button>
          </Link>
          <Link to="/choice-avatar">
            <Button className=" font-bold text-white bg-yellow-600 hover:bg-yellow-700   shadow-yellow-700 hover:shadow-amber-900" styleType={"primary"}>
              Choix de l'avatar + Questions
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
