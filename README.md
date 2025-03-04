# News Aggregator Website

This news website aggregates information from APIs, providing users with daily news, local updates, a scrolling news feed, and a search feature, along with home and about pages.

## Features
- Fetches news from **NewsAPI** and weather data from **WeatherAPI**.
- Displays **daily** and **local** news.
- Provides a **scrolling news feed**.
- Allows users to **search** for specific articles.
- Responsive **UI for all devices**.


## API Usage

This website fetches news and weather updates using **NewsAPI** and **WeatherAPI**. Below is a brief overview of how they are used:

### NewsAPI
- **Source:** [NewsAPI](https://newsapi.org/)
- **Usage:** Fetches the latest news articles from various sources.
- **Endpoints Used:**
  - `/v2/q` – Retrieves all the news and their resources based on the topic.
  - `/v2/sortBy` – Filters the news according to a specefic criteria.
  - `/v2/language` - Gives the news written in the specified language.
- **Example Request:**
  ```bash
  https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&language=en&apiKey=9b772c4950154e2f911c8673540e1926


### WeatherAPI
- **Source:** [WeatherAPI](https://openweathermap.org/api)
- **Usage:** Fetches the current weather of the specified city.
- **Endpoints Used:**
  - `/v2/q` – Retrieves the current weather of the city/area.
- **Example Request:**
  ```bash
  https://api.openweathermap.org/data/2.5/weather?q=homs&units=metric&appid=f8a6f3b18054d8f7c529799fa324f85d


## Contribution
Feel free to submit issues and pull requests to improve this project.

## Contact
For questions or suggestions, contact me at: [moussa3ammar@gmail.com]





 
