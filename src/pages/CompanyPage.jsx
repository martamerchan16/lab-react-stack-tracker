import { Link, useParams } from "react-router-dom";
import companiesData from './../companies.json'
import technologiesData from './../technologies.json'

function CompanyPage({ technologies }) {

  const { companySlug } = useParams()

  const companyProfile = companiesData.find((company) => company.slug === companySlug)

  return (
    <div className='company'>
      <h1>Company profile</h1>
      <div className="companyCard">
        <img src={companyProfile.logo} alt="" />
        <div className="companyDescription">
          <h1>{companyProfile.name}</h1>
          <p>{companyProfile.description}</p>
        </div>

      </div>
      <div className="technologies">

        {
          technologies.map(eachTechnology => {
            return (

              <Link className='LinkTech' to={`/tech/${eachTechnology.slug}`}>
                <div className="technology">
                  <img src={eachTechnology.image} alt="" />
                  <h2>{eachTechnology.name}</h2>

                </div>
              </Link>

            )
          })
        }
      </div>
    </div>
  );
}

export default CompanyPage;
