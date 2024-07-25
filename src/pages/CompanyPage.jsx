import { useParams } from "react-router-dom";
import companiesData from './../companies.json'

function CompanyPage() {

  const { companySlug } = useParams()

  const companyProfile = companiesData.find((company) => company.slug === companySlug)

  return (
    <div className="companyCard">
      <img src={companyProfile.logo} alt="" />
      <div className="companyDescription">
        <h1>holA</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quas harum, quasi laudantium soluta totam nihil rerum eveniet
          asperiores possimus itaque quia tempore, facere fuga adipisci
          doloribus omnis illo aliquid cupiditate.</p>
      </div>
    </div>
  );
}

export default CompanyPage;
