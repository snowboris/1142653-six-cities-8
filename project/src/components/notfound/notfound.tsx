import {Link} from 'react-router-dom';

function NotFound() {
  return(
    <div style={{position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
      <strong>404 Not Found.</strong><br />
       Вернуться на <Link to='/'><span style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}>главную страницу</span></Link>
    </div>
  );
}

export default NotFound;
