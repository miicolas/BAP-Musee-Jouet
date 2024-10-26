import { Link } from "react-router-dom";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/avatar">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Avatar
        </button>
      </Link>
      <Link to="/choice-avatar">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Choisir son avatar
        </button>
      </Link>
    </Layout>
  );
}