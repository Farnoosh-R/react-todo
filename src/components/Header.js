import { NavLink } from "react-router-dom";

const Header = () => {

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to={'/'} className="navbar-brand">Webprog</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to={'/'} className={(navDate) => navDate.isActive ? "nav-link avtive" : "nav-link"}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to={'/todo'} className={(navDate) => navDate.isActive ? "nav-link active" : "nav-link"}>Todo</NavLink>
      </li>
    </ul>

  </div>
</nav>
    )
}
export default Header;