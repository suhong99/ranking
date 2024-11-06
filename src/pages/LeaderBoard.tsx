import { DATA_URL } from '../shared/const/data';

const LeaderBoardPage = () => {
  async function fetchData() {
    try {
      const response = await fetch(DATA_URL);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  fetchData();

  return <div>LeaderBoardPage</div>;
};

export default LeaderBoardPage;
