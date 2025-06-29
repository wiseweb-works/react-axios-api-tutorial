import { useEffect, useState } from 'react';
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_URL);
      setTutorials(data);
    } catch (error) {
      console.log(error)
    }
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
