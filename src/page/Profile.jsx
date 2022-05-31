import { useParams } from "react-router-dom";

//data.hong.name 객체 접근
//data[hong][name] 객체 접근
const data = {
  hong : {
    name : 'hong-gil',
    address : '부산',
  },
  green : {
    name : 'green',
    address : '응애'
  }
}

const Profile = () => {
  //객체형식으로 들어옴
  const params = useParams();
  const profile = data[params.username];
  return(
    <div>
      <h2>프로필</h2>
      {/* JSX 구문 사용 */}
      {profile ? <p>{profile.name}<br/>{profile.address}</p> : <p>없는사람 입니다.</p>}
    </div>
  );
};
export default Profile;