from flask import Flask
from flask import Flask, request
import requests
import requests_cache
import pandas as pd
from flask_cors import CORS, cross_origin
from retry_requests import retry
import time

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def greet():
    return 'Up'

@app.route('/weather')
def weather():
    zipcode = request.args.get('zipcode')
    # Replace the <API_KEY> with your key below
    request_url = "http://api.weatherapi.com/v1/current.json?q="+zipcode+"&key=<API_KEY>"
    response = requests.get(request_url)
    return response.json()

if __name__ == "__main__":
    app.run(debug=True)