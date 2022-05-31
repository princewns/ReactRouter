import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Baby from './page/Baby';
import Profile from './page/Profile';
import BoardList from './page/BoardList';
import Board from './page/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 컴포넌트와 주소와 연결 */}
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/baby' element={<Baby/>}></Route>
        {/* 파라미터 값으로 지정해주었으므로 프로필 뒤에 아무값이나 들어와도
        프로필로 출력된다. */}
        <Route path='/profile/:username' element={<Profile/>}></Route>
        {/* 중첩하여 라우터를 사용할수 있다. - outlet 컴포넌트 필요 */}
        <Route path='/boardlist' element={<BoardList/>}>
          <Route path=':id' element={<Board/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
