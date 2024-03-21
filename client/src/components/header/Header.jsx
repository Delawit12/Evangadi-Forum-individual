import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useStateValue} from '../../utility/stateprovider'
import './header.css';
import axios from '../../utility/axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
const [{user }, dispatch] = useStateValue();
const [show, handleShow] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    if (user == null) {
      navigate('/login');
    }
   

  }, [navigate])  
  

  const handlelogout = () => { 
         dispatch({
            type: "SET_USER",
            user: null,
        });
          navigate('/login')
       
  }

  const handleClick = () => { 
     navigate('/profile')
  }

useEffect(() => {
	const handleScroll = () => {
		if (window.innerWidth > 992) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};
	window.addEventListener("resize", handleScroll);
	return () => {
		window.removeEventListener("resize", handleScroll);
	};
}, []);

  return (
		<>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand>
						<Link to="/">
							<img
								className="logo"
								src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
								alt="evangadi logo"
							/>
						</Link>
					</Navbar.Brand>
				  <Navbar.Toggle
					className="icon_coll"
				aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav ">
						<Nav className="me-auto"></Nav>

						{/* <Navbar.Collapse> */}
						<Nav>
							<Nav.Link href="#deets">
								<Link to="/" id="onelink">
									Home
								</Link>
							</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								<li className={`${show && "ms-3"}`}>How it work</li>
							</Nav.Link>
							<Nav.Link className={`${show && "d-flex"}`}>
								{user ? (
									<>
										<h6 className={`${show && "ms-3"}`} onClick={handleClick}>
											<AccountCircleIcon />
											{user.user["username"]}
										</h6>

										<li
											onClick={handlelogout}
											className={`btn btn-primary ${show && "ms-5"}`}
										>
											{" "}
											Logout
										</li>
									</>
								) : (
									<Link to="/login"> </Link>
								)}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

		</>
	);
}

export default Header