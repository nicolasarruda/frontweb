import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="home-image-container">
          <div id="main-image"></div>
        </div>
        <div className="home-content-container">
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos caros e dê mais um passo na realização do seu sonho
            </p>
          </div>
        </div>
      </div>
      <Link to="products">
        <div className="home-btn-catalog btn-model">
          <button>Ver catálogo</button>
          <p>Comece agora a navegar</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
