import style from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={`${style.mainnav}`}>
      <nav class={`"navbar bg-body-tertiary" ${style.nav}`}>
        <div class={`"container-fluid" ${style.navdiv}`}>
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            
          </a>
          <p>Gemini</p>
        </div>
      </nav>
      
    </div>
  );
};

export default NavBar;
