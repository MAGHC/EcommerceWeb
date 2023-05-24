import ProductList from '../../components/ProductList/ProductList';
import { useQuery } from 'react-query';
import { getAllProducts } from '../../service/firebase';
import style from './Home.module.css';

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery(['products'], async () => await getAllProducts());

  return (
    <>
      {isLoading && <p>로딩중</p>}
      {products && (
        <>
          <section className={style.section}>
            <h3> Hot Sale </h3>
            {
              <ProductList
                products={products.filter((product) => product.hotsale === true)}
              ></ProductList>
            }
          </section>
          <section className={style.section}>
            <h3>전체 상품</h3>
            {/* bonus : category handle  with react-query */}
            {<ProductList products={products}></ProductList>}
          </section>
        </>
      )}
    </>
  );
};

export default Home;
