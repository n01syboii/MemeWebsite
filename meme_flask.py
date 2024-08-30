#!/bin/python3

from flask import Flask, render_template
import requests
import json

app = Flask(__name__)

def get_meme():
    #Uncomment these two lines and comment out the other url line if you want to use a specific meme subreddt
    # sr = "/wholesomememes"
    # url = "https://meme-api.com/gimme" + srclhttp://10.168.171.170:5000
    url = "https://meme-api.com/gimme"
    response = json.loads(requests.request("GET", url).text)
    meme_large = response["preview"][-2]
    subreddit = response["subreddit"]
    return meme_large, subreddit

@app.route("/")
def index():
    meme_pic,subreddit = get_meme()
    return render_template("meme_index.html",
    meme_pic=meme_pic,
    subreddit=subreddit)

app.run(host="0.0.0.0", port=5000)