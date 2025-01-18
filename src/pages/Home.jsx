import { useEffect, useState } from 'react';
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_API_URL);
      setTutorials(data);
    } catch (error) {}
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
