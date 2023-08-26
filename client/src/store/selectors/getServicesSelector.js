export const getServicesSelector = (state) => {
  console.log(state.services.services[0]);
  return state.services.services[0];
}