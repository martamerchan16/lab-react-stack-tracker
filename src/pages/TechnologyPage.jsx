import { Link, useParams } from 'react-router-dom';
import technologiesData from './../technologies.json'

function TechnologyPage({ technologies }) {
  const { technologySlug } = useParams()

  const technologyProfile = technologiesData.find((technology) => technology.slug === technologySlug)

  return (
    <div className='technology'>
      <h1>Company profile</h1>

      <div className="tecnologyCard">
        <img src={technologyProfile.image} alt="" />
        <div className="technologyDescription">
          <h1>{technologyProfile.name}</h1>
          <p>{technologyProfile.description}</p>
        </div>

      </div>
    </div>
  );
}

export default TechnologyPage;
