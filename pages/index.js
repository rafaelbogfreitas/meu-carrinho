import Head from 'next/head';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

import { renderMetatags } from '../services/helpers';

export default function Home() {
  return (
    <>
      <Head>
        {renderMetatags(
          'Minha Loja',
          'Crie sua loja e administre suas vendas',
          'http://localhost:3000',
          'http://nossologo.svg'
        )}
      </Head>
      {/* Navbar placeholder */}
      <navbar className="navbar navbar-home">
        <Login />
        <Signup />
        <a href="https://meu-carrinho.herokuapp.com/api/v1/auth/google">
          Google
        </a>
        <a>Signup</a>
        <a>Login</a>
      </navbar>

      <section className="main-section">
        <div className="container container--row">
          <article className="main-section__info">
            <h1>Meu Carrinho</h1>
            <h2>O carrinho virtual para a sua loja</h2>
            <p>
              98% dos consumidores estão nas redes sociais, crie seu carrinho
              virtual e chegue até eles mais facilmente
            </p>
          </article>
          <figure className="main-section__figure">
            <img
              className="main-section__figure__img"
              src="/image2.svg"
              alt="prancheta"
            ></img>
          </figure>
        </div>
      </section>

      <section className="instructions">
        <h1>Como funciona?</h1>

        <div className="container-instructions regular">
          <div>
            <h2>Crie sua loja</h2>
            <p>
              Crie sua loja virtual personalizada e adicione os seus produtos.
            </p>
          </div>
          <img
            className="instructions-img"
            src="/image4.svg"
            alt="prancheta"
          ></img>
        </div>

        <div className="container-instructions reverse">
          <div>
            <h2>
              Divulgue nas<br></br>redes sociais
            </h2>
            <p>
              Encontre os seus clientes aonde eles estiverem, divulgue sua loja
              nas redes sociais mais utilizadas.
            </p>
          </div>
          <img
            className="instructions-img"
            src="/image2.svg"
            alt="prancheta"
          ></img>
        </div>
        <div className="container-instructions regular">
          <div>
            <h2>
              Receba pedidos<br></br>dos clientes
            </h2>
            <p>
              Receba pedidos facilmente através do whatsapp e notificação via
              email
            </p>
          </div>
          <img
            className="instructions-img"
            src="/image3.svg"
            alt="prancheta"
          ></img>
        </div>
        <div className="container-instructions reverse">
          <div>
            <h2>
              Acompanhe<br></br>os pedidos
            </h2>
            <p>
              Acompanhe o status dos pedidos no seu painel de vendas e monitore
              o desempenho da sua loja através de gráficos
            </p>
          </div>
          <img
            className="instructions-img"
            src="/image5.svg"
            alt="prancheta"
          ></img>
        </div>
      </section>
      <footer className="main-footer">
        <p>Built by:</p>
        <div className="devs">
          <div className="dev">Daniel</div>
          <div className="dev">Rafael</div>
          <div className="dev">Ricky</div>
        </div>
      </footer>
    </>
  );
}
