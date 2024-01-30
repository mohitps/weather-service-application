from flask import Flask
from flask import Flask, request
import openmeteo_requests
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
def weather2():
    time.sleep(1)
    zipcode = request.args.get('zipcode')
    request_url = "http://api.weatherapi.com/v1/current.json?q="+zipcode+"&key=13cbeb83c11a46edb2b201226243001"
    response = requests.get(request_url)
    return response.json()

if __name__ == "__main__":
    app.run(debug=True)