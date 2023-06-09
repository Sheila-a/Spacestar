import Grow from '../../components/Grow/Grow';
import Navbar from '../../components/Navbar/Navbar';
import Why from '../../components/Why/Why';
import GetStarted from '../../components/GetStarted/GetStarted';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Grow />
      <Why />
      <GetStarted/>
    </div>
  );
};

export default Home;
