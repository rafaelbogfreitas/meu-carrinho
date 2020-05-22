import { useState } from  'react';

import Head from 'next/head';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';

import { renderMetatags } from '../services/helpers';

export default function Home() {

  let [ modal, setModal ] = useState(false);
  let [ flip, setFlip ] = useState(false);
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
      <nav className="navbar navbar-home">
        <div className={ modal ? "container--modal offScreen" : "container--modal"}>
          <div onClick={() => setModal(!modal)}>Fechar</div>
          <div className="container--auth">
            <div className={flip ? "container--rotate turn-modal" : "container--rotate"}>
              <Login setFlip={setFlip}  flip={flip}/>
              <Signup setFlip={setFlip} flip={flip}/>
            </div>
          </div>
        </div>
        <a onClick={() => setModal(!modal)}>Entrar</a>
      </nav>

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

      <section className="instructions-section">
        <div className="container container--home">
          <h2 className="instructions-section__title">Como funciona?</h2>

          <section className="container--row">
            <article className="instructions-section__info">
              <h3>Crie sua loja</h3>
              <p>
                Crie sua loja virtual personalizada e adicione os seus produtos.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image4.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section instructions-section--light">
        <div className="container container--home">
          <section className="container--row-reverse">
            <article className="instructions-section__info">
              <h3>Divulgue nas redes sociais</h3>
              <p>
                Encontre os seus clientes aonde eles estiverem, divulgue sua
                loja nas redes sociais mais utilizadas.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image2.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section">
        <div className="container container--home">
          <section className="container--row">
            <article className="instructions-section__info">
              <h3>Receba pedidos dos clientes</h3>
              <p>
                Receba pedidos facilmente através do whatsapp e notificação via
                email.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image3.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
        </div>
      </section>

      <section className="instructions-section instructions-section--light">
        <div className="container container--home">
          <section className="container--row-reverse">
            <article className="instructions-section__info">
              <h3>Acompanhe os pedidos</h3>
              <p>
                Acompanhe o status dos pedidos no seu painel de vendas e
                monitore o desempenho da sua loja através de gráficos.
              </p>
            </article>
            <figure className="instructions-section__figure">
              <img
                className="instructions-section__figure__img"
                src="/image5.svg"
                alt="prancheta"
              ></img>
            </figure>
          </section>
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
