import {Link} from 'react-router-dom';
import ProductCard from '../components/product-card';


const Home = () => {


  const addToCartHandler = () => {};

  return (
    <div className='home'>
      
      <section>

      </section>
      
      <h1>
        Latest Product
        <Link to = "/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
            <ProductCard
              // key={i._id}
              productId= "1233Abc"
              name="Accu-Chek Active Glucose Monitor with Free 10 Test Strips"
              price={789}
              stock={10}
              handler={addToCartHandler}
              photo="https://www.netmeds.com/images/product-v1/600x600/15577/accu_chek_active_glucose_monitor_with_free_10_test_strips_0_3.jpg"
            />

            <ProductCard
              // key={i._id}
              productId= "1234Abc"
              name="Combiflam-Plus 10's"
              price={30}
              stock={80}
              handler={addToCartHandler}
              photo="https://www.netmeds.com/images/product-v1/600x600/840073/combiflam_plus_10s_0_1.jpg"
            />

            <ProductCard
              // key={i._id}
              productId= "1235Abc"
              name="Medisynth Gasgan Eazy Sugar Free Syrup 120 ml"
              price={106}
              stock={50}
              handler={addToCartHandler}
              photo="https://www.netmeds.com/images/product-v1/600x600/1140783/medisynth_gasgan_eazy_sugar_free_syrup_120_ml_750474_0_0.jpg"
            />
      </main>
    </div>
  )
}

export default Home;