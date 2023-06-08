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


        {/* <div className={design.Grow_left}>
          <img src={STAR} alt='' />
          <p>Trusted by 3456+ users worldwide</p>
          <div className={design.Grow_left_middle}>
            <h1>
              Share Your Story with <span>Spacestar</span>{' '}
            </h1>
            <p>
            A safe haven where you can freely share your thoughts, emotions, and experiences, knowing that you are not alone.
            </p>
          </div>
          <div className={design.Navbar}>
          <Link to='/comingsoon'>
            <Button  content='Get started'/>
          </Link>
          </div>

        </div> */}
        {/* <div className={design.Grow_right}>
          <img src={RIGHT} alt='' />
        </div> */}
        {/* {' '} */}
      </div>
    </div>
  );
};

export default Soon;
