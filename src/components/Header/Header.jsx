import s from './Heder.module.css';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const isLoggedIn = true;

  return (
    <header>
      <Navigation />

      {isLoggedIn && (
        <div>
          <img src='' alt='' />
          <p>User name</p>
          <button type='button'>Exit</button>
        </div>
      )}
    </header>
  );
};

export default Header;
