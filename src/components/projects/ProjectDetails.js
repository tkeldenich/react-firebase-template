import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetailsWrapper = (props) => {
  const { id } = useParams();
  return <ProjectDetails id={id} {...props} />;
};

const ProjectDetails = (props) => {
  const { projects, id } = props;
  const project = projects ? projects[id] : null;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey ligthen-4 white-text">
            <div>
              Posted by the {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const projects = state.firestore.data.projects;
  //const project = projects ? projects[id] : null;
  return {
    projects: projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetailsWrapper);
