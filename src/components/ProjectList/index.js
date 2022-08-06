import React from 'react';

import './projectList.css'



function ProjectList({projects})  {
console.log(projects);

    return (
        <div className='ProjectList'>
            {projects.map(
                ({img}) => (
                <div className="ramka">
                    <img  src={img} />
                </div>
                )
            )}
        </div>
    )
}

export default ProjectList;