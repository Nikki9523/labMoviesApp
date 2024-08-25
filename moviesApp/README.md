# Project

This is a Movie App created for the Fullstack 2 assignment. It allows users to view, search and filter movies and tv series.
It also allows users to submit an idea for their own movie idea.


## Features Added for Assignment 2

### UI - New views/pages:

Added TvSeriesList and TvSeries Pages
Added Tv Series and Tv Series Detail Page
Added Fantasy Movie Page
Added Popular Movie List Page

List view (e.g. Most popular movies, Actors, Similar movies, TV Series):
Added Tv Series List view
Added Popular Movie List View


Detail view (e.g. Actor Bio, TV Series):
Added Tv Series Detail view


### Routing - New routes.
Added:
"/tv-series/:id"
"/movies/create"
"/popular"
"/tv-series"


### Data hyperlinking:
Added Link to Popular Page, Add Fantasy Movie Page, Tv Series Detail Page


### Data Model:
Added FantasyMovie , DateData, BaseTvSeriesProps ,BaseTvSeriesListProps ,TvDetailsProps ,TvSeriesProps ,
TvSeriesImage , DiscoverTvSeries 


### Server state Caching - Added previously as part of lab


### Additional filtering and/or sorting criteria.

Added date filter to filtering UI. Tried to get it to work but wasn't able to filter based on release date.

### My fantasy movie. (Basic) (*1)
Added page and form where user can submit basic details for fantasy movie. Can log out and see the data user submits but didn't use that data anywhere yet.

### Other.
Attempted to split image gallery into separate component to change the detail pages layout. Wasn't able to get it to work.


## Installation

1. Clone the repository:  
   `git clone https://github.com/Nikki9523/labMoviesApp.git`

2. Navigate to the project directory:  
   `cd ./moviesApp`

3. Install dependencies:  
   `npm install`

4. Create .env file with api key for tmbd 
   `VITE_TMDB_KEY=your-api-key`

5. npm run dev

6. go to local host 3000