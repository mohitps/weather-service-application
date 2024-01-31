# weather-service-application

The purpose of this web application is to show weather data for a given zip code.

The app makes use of an open weather API to get weather data using the following link:
https://www.weatherapi.com/my/

# How to run the UI
1. First, ensure that the api backend container is running. For more into on how to do this, visit the "Docker Steps" section
2. Now we can CD into the weather-ui directory
3. Type "npm start" and explore the application

# Functionality
1. In order to use the UI, first click on the top right link called "Weather"
2. Next, input a ZIP code that you would like to see the weather data for
3. Click fetch, and the data will be displayed on the screen


# Docker Steps:
# Stop and Remove the Docker Container (API)
docker stop weatherapi && docker rm weatherapi 

# Build the Docker Image - Code is baked into it
docker build --tag weatherapi-docker .

# Run the Docker container from the Weather API Docker image, exposing port 5000 with name as weatherapi
docker run -d -p 5000:5000 --name weatherapi weatherapi-docker

# Command to View logs for the Container
docker logs -f weatherapi