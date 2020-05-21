module.exports = {
    env: {
    apiUrl: process.env.NODE_ENV === "production" ?
       'https://meu-carrinho.herokuapp.com/api/v1' : 
       'http://localhost:5000/api/v1',
  }
}