import { Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <Link to="/welcome/new-user">
        <h1>The Welcome Page</h1>
      </Link>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
