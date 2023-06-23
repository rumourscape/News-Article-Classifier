from flask import Flask, request
from classifier import classifier
from mongo import new_article, get_articles

app = Flask(__name__, static_folder='static/dist', static_url_path='')

@app.route('/api/ping')
def hello():
    return 'Pong!'

@app.route('/api/url', methods=['POST'])
def classify():
    data = request.json
    url = data["url"]
    categories = classifier(url)
    new_article(url, categories)
    
    return categories

@app.route('/api/history')
def history():
    return get_articles()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")


if __name__ == '__main__':
    app.run(debug=True)