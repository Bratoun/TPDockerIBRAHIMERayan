from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)	

# Connexion à MongoDB (en local sur le port 27017)
# Pour MongoDB Atlas, remplacez l'URI par votre chaîne de connexion 'mongodb+srv://...'
client = MongoClient("mongodb://localhost:27017/")

@app.route("/testBD")
def accueil():
    return "Connexion Flask & MongoDB réussie !"

@app.route("/")
def hello_world():
	return "Hello, World!"


if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000)
