from flask import Flask, send_from_directory
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory('html','index.html')

@app.route("/<file>")
@app.route("/<dir>/<file>")
def file(dir='',file=''):
    return send_from_directory(dir,file)

if __name__ == "__main__":
    app.run(debug=True)