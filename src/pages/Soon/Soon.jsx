// import RIGHT from '../../assets/grow_img.png';
// import STAR from '../../assets/starz.png';
// import Button from '../Button/Button';
import design from '../../components/Grow/grow.module.css';
import { Link } from 'react-router-dom';
import Timer from '../../components/Countdown/Timer'
import Optin from '../../components/Optin/Optin'
import Preloader from '../../components/Preloader/Preloader'
// import '../../components/Grow/Grow.css'

const Soon = () => {
  return (
    <div className={`${design.Grow} ${design.soon} ` }>
      <div className={design.Grow2}>
      <div  >
      <div className={`${design.sooncontainer}`}>
        <h1>
          Spacetar is
          <br />
          Coming Soon
        </h1>
        <div className={`${design.timer}`}>
        <Timer />
        </div>
        <div>
        <Optin />
        </div>
        <div>
        <Preloader />
        </div>
      </div>
    </div>
    
      </div>
    </div>
  );
};

export default Soon;
