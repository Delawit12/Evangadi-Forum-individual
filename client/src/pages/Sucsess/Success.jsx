import { Link } from 'react-router-dom'
import '../signIn/signin.css'
import About from '../../components/about/About';

function Success() {
        
  return (
    <div className="container-fluid login_page">
        <div className="container py-5 d-md-flex justify-content-between login_container">
          <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
            <p className="p1">password changed successfully</p>
            <Link to="/" className="a3 a1">
              login
            </Link>
          </div>
          <About />
        </div>
      </div>
  )
}
export default Success