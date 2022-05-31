import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h2>홈</h2>
      <p>홈 화면입니다.</p>
      {/* a 태그와 동일한 역할 = Link */}
      <Link to='/about'>소개</Link><br/>
      <Link to='/baby'>응애</Link><br/>
      <Link to='/profile/hong-gil'>프로필</Link>
    </div>
  );
};

export default Home