from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar")
def buscar():
    return render_template('buscar.html')

@app.route("/insertar")
def insertar():
    return render_template('insertar.html')

@app.route("/ver")
def ver():
    return render_template('ver.html')

@app.route("/borrar")
def borrar():
    return render_template('borrar.html')

@app.route("/editar")
def editar():
    return render_template('editar.html')

