import { Outlet } from 'react-router-dom';
import Hedaer from './components/Header/Hedaer';

const Layout = () => {
  return (
    <>
      <Hedaer></Hedaer>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
