import Link from "next/link";

function Home() {
  return  (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <img src='main-logo.png' className='img-thumbnail border-white' alt='main-logo.png' />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"> Add Container</a>
          </li>
          <Link href='/'>
            <li className="nav-item">
              <a className="nav-link">Log out</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
    
  )
}

export default Home;