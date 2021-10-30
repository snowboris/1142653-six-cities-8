import MainPage from '../main/main';
import {Hotels} from '../../types/data';

type Props = {
  data: Hotels
}

function App({ data }: Props): JSX.Element {
  return <MainPage data={data} />;
}

export default App;
