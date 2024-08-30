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
        A dedicated coder with a knack for solving complex problems and a
        passion for turning ideas into reality.
      </p>
      <p>
        Known for writing clean, efficient code, he approaches every challenge
        with a solution-oriented mindset.
      </p>
      <p>
        Some say his coding skills are as solid as a rock—reliable, strong, and
        built to last.
      </p>
      <p>
        He consistently achieves top results, contributing to projects that make
        a real impact.
      </p>
      <h2>Score</h2>
      <p>React basic: 7/7</p>
      <p>React advanced: 11/12</p>
      <p>React expert: 28/30</p>
    </section>
  );
}
export default Profile;
