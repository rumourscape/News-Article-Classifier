from pymongo import MongoClient
import os

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = os.getenv('MONGO')
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['KYRO']

def new_article(url, categories):
   client = get_database()
   collection = client['articles']

   item = {"url": url, "category": categories}
   collection.insert_one(item)

def get_articles():
   client = get_database()
   collection = client['articles']
   cursor = collection.find()

   data = list()
   for item in cursor:
      item.pop('_id')
      data.append(item)

   return data
