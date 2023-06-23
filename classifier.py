from transformers import AutoModelForSequenceClassification
from transformers import AutoTokenizer
from scipy.special import expit
from scraper import extract_text


def classifier(url):
    categories = list()
    article_text = extract_text(url)
        
    MODEL = f"cardiffnlp/tweet-topic-21-multi"
    tokenizer = AutoTokenizer.from_pretrained(MODEL)

    # PT
    model = AutoModelForSequenceClassification.from_pretrained(MODEL)
    class_mapping = model.config.id2label

    text = article_text[:1000]
    tokens = tokenizer(text, return_tensors='pt')
    output = model(**tokens)

    scores = output[0][0].detach().numpy()
    scores = expit(scores)
    predictions = (scores >= 0.5) * 1

    # Map to classes
    for i in range(len(predictions)):
        if predictions[i]:
            categories.append(class_mapping[i].replace("_"," "))
    
    return categories