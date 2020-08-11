import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/33/img18/Prime/GW_Slot_Refresh/Resize/GW_DesktopHero_primerefreshV1_1500x600._CB455671881_.jpg"
                alt="banner" />
            <div className="home__row">
                <Product id="1"
                    title="Laptop Acer 29032, exelente para progamadores que estan experimentando con reactjs"
                    price={10000.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NbkJz9M-L._AC_SX466_.jpg" />
                <Product id="2"
                    title="Laptop Acer 29032, exelente para progamadores que estan experimentando con reactjs"
                    price={13000.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NbkJz9M-L._AC_SX466_.jpg" />
            </div>
            <div className="home__row">
                <Product id="3"
                    title="Laptop Acer 29032, exelente para progamadores que estan experimentando con reactjs"
                    price={140000.0}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NbkJz9M-L._AC_SX466_.jpg" />
                <Product id="4"
                    title="Laptop Acer 29032, exelente para progamadores que estan experimentando con reactjs"
                    price={10212.0}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NbkJz9M-L._AC_SX466_.jpg" />
            </div>
            <div className="home__row">
                <Product id="6"
                    title="Laptop Acer 29032, exelente para progamadores que estan experimentando con reactjs"
                    price={2200.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81NbkJz9M-L._AC_SX466_.jpg" />
            </div>



        </div>

    )
}

export default Home
