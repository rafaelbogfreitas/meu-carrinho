import React from 'react'
import Link from 'next/link'
import axios from 'axios'


export default function Store({ store }){
  // let router = useRouter();
  console.log(store)

  return (
    <div>
    <h1 style={{backgroundColor: `${store.theme.secondaryColor}`}}>Welcome to {store.name} store!!</h1>
      <div className="products">
        {store.products.map( product => {
          return (
            <Link href={'/product/[id]'} as={`/product/${product._id}`}>
              <a key={product._id}>{product.name}</a>
            </Link>
          )
          }
        )}
      </div>
    </div>
  )
}


Store.getInitialProps = async ctx => {
  let { name } = ctx.query;
  const store = await axios.get(`http://localhost:5000/api/v1/store/${name}`)
  return {
    store: store.data[0]
  }
}

