
export const getProjectsSelector = (state) => {
  // console.log(state);
  return state.projects.projects;
}
export const getProjectByIdSelector = (state) => {
  // console.log(state.project.project);
  return state.project.project;
}
