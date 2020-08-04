const navbar = (() => {
  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark');
  const navBrand = document.createElement('a');
  navBrand.setAttribute('class', 'navbar-brand text-warning');
  navBrand.setAttribute('href', '#');
  navBrand.innerHTML = '<i class="fas fa-thumbtack"></i>TodoApp';
  const resetElement = document.createElement('p');
  resetElement.setAttribute('class', 'text-warning reset');
  resetElement.innerHTML = '<i class="fas fa-sync"></i>Reset';
  nav.appendChild(navBrand);
  nav.appendChild(resetElement);
  return nav;
})();

export default navbar;