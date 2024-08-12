import { Link } from "react-router-dom";
import "../styles/TestsPage.css";

function TestsPage() {
  return (
    <div>
      <section className="center-holder">
        <section className="card-holder">
          <article>
            <h1>Basic react and javascript</h1>
            <p>This is the basic, you need to know this!</p>
            <Link to="/BasicReact">Tests</Link>
          </article>
          <article>
            <h1>Advanced react and javascript</h1>
            <p>
              This is good to know, you can almost say that you are an expert
            </p>
            <Link to="/BasicReact">Tests</Link>
          </article>
          <article>
            <h1>Expert react and javascript</h1>
            <p>You can call yourself a react expert!!</p>
            <Link to="/BasicReact">Tests</Link>
          </article>
          <article>
            <h1>God level react and javascript</h1>
            <p>Prepare yourself for a call from the president.</p>
            <Link to="/BasicReact">Tests</Link>
          </article>
        </section>
      </section>
    </div>
  );
}
export default TestsPage;
