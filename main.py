from flask import Flask, request
from classifier import classifier

app = Flask(__name__, static_folder='static/dist', static_url_path='')

@app.route('/api/ping')
def hello():
    return 'Pong!'

@app.route('/api/url', methods=['POST'])
def classify():
    data = request.json()
    return classifier(data.url)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")


if __name__ == '__main__':
    app.run(debug=True)