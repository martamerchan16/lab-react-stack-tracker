import { Link } from "react-router-dom";
import CompanyPage from "./CompanyPage";


function HomePage({ companies }) {


  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="Companies">

        {
          companies.map(eachCompany => {
            return (

              <Link className='LinkCompany' to={`/company/${eachCompany.slug}`}>
                <div className="Company">
                  <h2>{eachCompany.name}</h2>
                  <img src={eachCompany.logo} alt="" />
                </div>
              </Link>

            )
          })
        }
      </div>

    </div >
  );
}

export default HomePage;
