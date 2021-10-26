import MainPage from '../main/main';
import Hotel from '../../types/data';

type Props = {
  data: Hotel[]
}

function App({ data }: Props): JSX.Element {
  return <MainPage data={data} />;
}

export default App;
