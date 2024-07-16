export function renderNavbar(container){
    // Create the <nav> element with class "header-Container"
    const nav = document.createElement('nav');
    nav.className = 'header-Container';

    // Create the <div> element with class "logo"
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';

    // Create the <h1> element and set its content to "Marvel"
    const h1 = document.createElement('h1');
    h1.textContent = 'Marvel';

    // Append the <h1> to the <div> with class "logo"
    logoDiv.appendChild(h1);

    // Create the <ul> element with class "headr-ul"
    const ul = document.createElement('ul');
    ul.className = 'headr-ul';

    // Create the <li> element with id "home"
    const liHome = document.createElement('li');
    liHome.id = 'home';

    // Create the <a> element and set its href attribute and content
    const aHome = document.createElement('a');
    aHome.href = './index.html';
    aHome.textContent = 'Home';

    // Append the <a> to the <li> with id "home"
    liHome.appendChild(aHome);

    // Create the <li> element with id "fav"
    const liFav = document.createElement('li');
    liFav.id = 'fav';

    // Create the <a> element and set its href attribute and content
    const aFav = document.createElement('a');
    aFav.href = './favourite.html';
    aFav.textContent = 'Favourite';

    // Append the <a> to the <li> with id "fav"
    liFav.appendChild(aFav);

    // Append the <li> elements to the <ul>
    ul.appendChild(liHome);
    ul.appendChild(liFav);

    // Append the <div> with class "logo" and <ul> to the <nav>
    nav.appendChild(logoDiv);
    nav.appendChild(ul);

    // Finally, append the <nav> element to the body or a specific container
    container.appendChild(nav);
}