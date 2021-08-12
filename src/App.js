import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Homepage from './pages/Homepage';
import AppWrapper from "./styled/app/wrapper.styled";

function App() {
  return (
    <AppWrapper>
      <Homepage />
    </AppWrapper>
  );
}

export default App;
