import "../styles/CodeMatcher.css";
import meMario from "../assets/meMario.png";

function Profile() {
  return (
    <section className="center-holder">
      <h2>StefanStenStark</h2>
      <div>
        <img
          src={meMario}
          alt="Mario"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        />
      </div>
      <p>
        A great coder with the passion to do the coding and do the thing where
        you turn the passion into a profession.{" "}
      </p>
      <p>One day Oden told him to hack into the mainframe. And he did!</p>
      <p>
        Some people say that he is as strong as a stone.. Not sure how strong a
        stone is. But he is!
      </p>
      <p>
        He got all the highscores. Some say that he even made the first
        questions and answers.
      </p>
      <h2>Score</h2>
      <p>React basic: 7/7</p>
      <p>React advanced: 12/12</p>
      <p>React expert: 32/30</p>
    </section>
  );
}
export default Profile;
