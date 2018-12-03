import React from 'react'

function ProjectDetail(props) {
    console.log(props);
    return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project title-{props.match.params.id}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur se </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Simranjit Singh</div>
            <div>29 august, 5am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail;
