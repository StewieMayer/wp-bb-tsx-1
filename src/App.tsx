import Layout from "./components/Layout";
import "./styles/index.css";

const App = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline text-center">
        Hola, Mundo! ¡Bienvenido a mi aplicación React con TypeScript, Babel y
        Webpack!
      </h1>
    </Layout>
  );
};

export default App;
