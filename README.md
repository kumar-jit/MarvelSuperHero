# SuperHero App

This application allows users to search for superheroes, view detailed information about them, and manage a list of favorite superheroes.

 <a href="https://kumar-jit.github.io/MarvelSuperHero/">Live Demo</a>

## Features

### Home Page
- **Search Superheroes**: Fetch and display a list of superheroes using the Marvel API. A search bar filters the characters based on the search query. For example, typing “bat” will show “Batman”.
- **Favorite Button**: Each search result includes a favorite button. Clicking this button adds the superhero to the "My Favorite Superheroes" list.
- **Detailed Superhero Information**: Clicking on any superhero opens a new page with more detailed information about the superhero.

### Superhero Page
- **Detailed Information**: Displays extensive information about the superhero, including name, photo, bio, comics, events, series, and stories, all provided by the Marvel API.

### My Favorite Superheroes Page
- **List of Favorite Superheroes**: Displays a list of all the favorite superheroes.
- **Persistent List**: The favorite superheroes list is persistent, meaning it remains the same before and after closing the browser.
- **Remove from Favorites**: Each superhero in the list has a remove button that allows the user to remove the superhero from the favorites list.

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/superhero-app.git
   cd superhero-app
### Running the Application
-  Open the index.html file in your browser to start the application.
### Environment Variables
-   ```javascript
      const API_KEY = '<your-public-key>';
      const HASH = '<your-md5-hash>';
      const TIMESTAMP = '<time-stamp>';

### Built With
1. HTML
2. CSS
3. JavaScript
### Acknowledgments
-  Thanks to Marvel for providing the API used in this application.

## Screenshots:

### Home Page:

### Hero Detail Page

### Favorite Page