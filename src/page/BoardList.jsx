import { Link, Outlet } from "react-router-dom";

const BoardList = () => {
  return(
    <div>
      <h2>board</h2>
      <ul>
        <li><Link to='/boardlist/1'>게시글 1</Link></li>
        <li><Link to='/boardlist/2'>게시글 2</Link></li>
        <li><Link to='/boardlist/3'>게시글 3</Link></li>
        <li><Link to='/boardlist/4'>게시글 4</Link></li>
        <li><Link to='/boardlist/5'>게시글 5</Link></li>
      </ul>
      {/* vue에 router-view 같은 개념?? 
      중첩된 컴포넌트 화면을 출력 */}
      <Outlet/>
    </div>
  );
};
export default BoardList;