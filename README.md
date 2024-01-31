# Welcome to my Weather Service Appplciation!
The purpose of this web application is to show weather data for a given zip code.

The app makes use of an open weather API to get weather data using the following link:
https://www.weatherapi.com/my/

# Initial Step
1. Clone the repository with the following link "https://github.com/mohitps/weather-service-application.git"

# Structure
My application is split into two folders, weather-ui (frontend) and weather-api (backend).
In order to use the frontend, the backend must be running. I have created a Dockerfile for the
backend already, and the steps to start the backend are in the next section.

# Start the Backend
The backend has a Dockerfile which can be ran with the following commands:

Stop and Build the API Docker Container
Note: if the container is not yet created then skip to the "Build the Docker Image" command
```docker stop weatherapi && docker rm weatherapi```

Build the Docker Image - Code is baked into it
```docker build --tag weatherapi-docker .```

Run the Docker container from the Weather API Docker image, exposing port 5000 with name as weatherapi
```docker run -d -p 5000:5000 --name weatherapi weatherapi-docker```

Command to View logs for the Container
```docker logs -f weatherapi```


# How to run the UI (Frontend)
1. CD into the weather-ui directory
2. Type "npm start" and explore the application (more info in the Functionality section)

# How to use the application
1. In order to use the UI, first click on the top right link called "Weather"
2. Next, input a ZIP code that you would like to see the weather data for
3. Click fetch, and the data will be displayed on the screen
