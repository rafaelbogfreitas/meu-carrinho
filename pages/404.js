import React from 'react';
import Link from 'next/link'

const error = () => (
  <>
    <h1 className="title">Página não encontrada</h1>
    <img className="four-o-four-img" src="/404-bg.svg" alt="404" />
    <Link href="/"><a className="btn--logout">Voltar</a></Link>
  </>
);

export default error;
