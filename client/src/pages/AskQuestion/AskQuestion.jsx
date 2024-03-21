import React, { useContext, useEffect, useState } from "react";
import "./askQuestion.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utility/axios";
import { useStateValue } from '../../utility/stateprovider';
export default function AskQuestion() {
  const [{user }, dispatch] = useStateValue();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

    useEffect(() => {
    if (!user) { 
      navigate('/login');
    }
    // console.log(user);

  }, [navigate])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
          id: user.user.id,
          question: form.question,
          category: form.questionCatagory,
          questionDescription: form.questionDescription,
        });
        console.log({
          userId: user.user.id,
          question: form.question,
          category: form.questionCatagory,
          questionDescription: form.questionDescription,
        })
    try {
      const response = await axios.post(
        "api/questions/askQuestion",
        {
          userId: user.user.id,
          question: form.question,
          category: form.questionCatagory,
          questionDescription: form.questionDescription,
        }
      );
      console.log(response)
      alert(response.data.msg);
      navigate("/");
    } catch (err) {
      alert(err)
      console.log("problem", err);
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center my-5">
        <h3>Steps to write a good question</h3>
        <ul className="question_steps">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column p-5 question_form  justify-content-between"
      >
        <h3>Ask a public question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>
        <input
          className="question_title"
          type="text"
          name="question"
          placeholder="Title"
          required
          onChange={handleChange}
        />
        <select
          className="question_title"
          name="questionCatagory"
          onChange={handleChange}
          
        >
          <option value="">Select category</option>
          <option value="phase one">Phase One</option>
          <option value="phase two">Phase Two</option>
          <option value="phase three">Phase Three</option>
          <option value="project">Project</option>
          <option value="other">Other</option>
        </select>
        <textarea
          className="question_input"
          placeholder="Question Description..."
          name="questionDescription"
          onChange={handleChange}
        ></textarea>
        <br/>
        <div className="row">
        <button className="question_post_btn col-3" >
          Post Your Question
        </button>
          <div className="d-flex mb-5 justify-content-between org_bt col-9">
				<Link to="http://localhost:3000/">
					<button className="back_dash">Back to dashboard</button>
				</Link>
				{/* <h4>Welcome</h4> */}
			</div>
        
  </div>
      </form>
    </div>
  );
}
