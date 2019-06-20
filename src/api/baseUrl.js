export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://nameless-reef-24222.herokuapp.com/';
}

function getQueryStringParameterByName(name) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(name);
}
