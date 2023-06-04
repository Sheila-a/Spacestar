import design from './why.module.css';
import Button from '../Button/Button';
import Green from '../../assets/green.png';
import Blue from '../../assets/blue.png';
import Orange from '../../assets/orange.png';
import Purple from '../../assets/purple.png';

const Why = () => {
  return (
    <div className={design.Why}>
      <div className={design.Why_cards}>
        <div className={`${design.Why_card} ${design.Why_card_green}`}>
          <img src={Green} />
          <h3>Engage in community</h3>
        </div>
        <div className={`${design.Why_card} ${design.Why_card_blue}`}>
          <img src={Blue} />
          <h3>Discover new connections</h3>
        </div>
        <div className={`${design.Why_card} ${design.Why_card_orange}`}>
          <img src={Orange} />
          <h3>Share ideas and creativity</h3>
        </div>
        <div className={`${design.Why_card} ${design.Why_card_purple}`}>
          <img src={Purple} />
          <h3>Access information and news</h3>
        </div>
      </div>
      <div className={design.Why_right}>
        <h1>
          Why <span>Spacestar</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id sed auctor quisque rutrum
          vestibulum. Porttitor mattis mauris dolor libero ultrices viverra
          viverra nam donec. Morbi accumsan tristique auctor tellus. Elit proin
          tellus nullam morbi gravida urna tortor sed.
        </p>
        <Button content='Get started' />
      </div>
    </div>
  );
};

export default Why;
