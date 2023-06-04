import RIGHT from '../../assets/grow_img.png';
import STAR from '../../assets/starz.png';
import Button from '../Button/Button';
import design from './grow.module.css';

const Grow = () => {
  return (
    <div className={design.Grow}>
      <div className={design.Grow_left}>
        <img src={STAR} alt='' />
        <p>Trusted by 3456+ users worldwide</p>
        <div className={design.Grow_left_middle}>
          <h1>
            Grow your network with <span>Spacestar</span>{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. In non scelerisque velit
            tortor scelerisque velit semper congue. Penatibus ornare.
          </p>
        </div>

        <Button content='Get started' />
      </div>
      <div className={design.Grow_right}>
        <img src={RIGHT} alt='' />
      </div>
    </div>
  );
};

export default Grow;
