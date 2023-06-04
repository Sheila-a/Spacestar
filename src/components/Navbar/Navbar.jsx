import LOGO from '../../assets/LOGO.png';
import Button from '../Button/Button';
import design from './navbar.module.css';
const Navbar = () => {
  return (
    <div className={design.Navbar}>
      <img src={LOGO} alt='' />
      <Button content='Get started' />
    </div>
  );
};

export default Navbar;
