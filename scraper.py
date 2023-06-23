import requests
from bs4 import BeautifulSoup

def extract_text(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    text = soup.find_all('p')
    article_text = ''
    for element in text:
        article_text += '\n' + ''.join(element.findAll(string = True))
    return article_text
