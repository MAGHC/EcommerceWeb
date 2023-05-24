import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'home', link: '/' },
  { name: 'newProduct', link: '/admin' },
  { name: 'cart', link: '/cart' },
];

const Hedaer = () => {
  const location = useLocation();

  return (
    <header className={style.header}>
      <button className={style.btn}>Notification</button>

      <Link to={'/'}>
        <h1>LOGO</h1>
      </Link>

      <nav className={style.nav}>
        <ul>
          {NAV_LINKS.map((nav, i) => {
            return (
              <li key={i}>
                <Link
                  className={
                    location.pathname === nav.link
                      ? `${style.navItem} ${style.selected} `
                      : `${style.navItem}`
                  }
                  to={nav.link}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Hedaer;
