// 쿼리스트링 ?로 시작하고 키=값 한쌍으로 들어오는 값
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Baby = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // router v6 추가
  const num = searchParams.get('num');
  const username = searchParams.get('username');
  return (
    <div>
      <h2>응애</h2>
      <p>응애 입니다.</p>
      <p>쿼리스트링 : {location.search}</p>
      <p> useSearchParams : {num}</p>
      {/* if문을 간단하게 쓰기위해 ? : 와같은 삼항연산자나 && || 연산자 사용
      && : ? 대신에 && 연산자를 사용하면 참일때 뒤에 작성한 태그를 출력한다.
      || : ? 대신에 || 연산자를 사용하면 거짓일때 뒤에 작성한 태그를 출력한다. */}
      {username === 'green' && <p>환영합니다. {username}님</p>}
    </div>
  );
};

export default Baby