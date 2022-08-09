import React from 'react';
import PropTypes from 'prop-types';
import './projectList.css'

function ProjectList({projects})  {
  return (
    <div className='ProjectList'>
      {projects.map(
        ({img},i) => (
          <div key={i} className="ramka">
            <img src={img} alt={i} />
          </div>
        )
      )}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}


export default ProjectList;