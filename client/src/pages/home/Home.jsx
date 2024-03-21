import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "../../utility/axios";

const Home = () => {
	const [allQuestions, setallQuestions] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("api/questions/");
				console.log(response)
				setallQuestions(response.data.questions);
				console.log(response.data)
			} catch (err) {
				alert(err);
				console.log("problem", err);
			}
		}
		fetchData();
	}, []);
console.log("all question",allQuestions)
	return (
		<div className="container my-5 home-container">
			<div className="d-flex mb-5 justify-content-between">
				<Link to="AskQuestion">
					<button className="ask_button">Ask Question</button>
				</Link>
				{/* <h4>Welcome</h4> */}
			</div>
			<h3>Questions</h3>
			<br />
			<div>
				{allQuestions.map((question) => (
			
					<div key={question.questionId}>
						<Link
							to={`/SingleQuestion/${question.questionId}`}
							className="text-decoration-none text-reset"
						>
						
							<hr />
							<h5 className="link-hoverorange">{question.question}</h5>
							<p>{question.category}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
