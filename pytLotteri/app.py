from flask import Flask, render_template, request
import random

app = Flask(__name__)

frukter = ("Apelsin", "Banan", "Melon", "Kiwi", "Citron")
looping = True

def printfruit(userinput):
    fnr = int(userinput)
    return "\n" + frukter[fnr-1] + " Kommer Här!\n"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/fruktmaskin", methods=["GET", "POST"])
def fruktmaskin():
    if request.method == "POST":
        fruktnr = request.form["fruktnr"]
        resultat = printfruit(fruktnr)
        return render_template("result.html", resultat=resultat)
    else:
        return render_template("fruktmaskin.html", frukter=frukter)

if __name__ == "__main__":
    app.run(debug=True)
