from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():

    return """
    <html>

    <head>

    <title>Shopping Cart</title>

    <style>

    body{

        background:#111827;
        color:white;
        font-family:Arial;
        text-align:center;
        padding-top:100px;

    }

    button{

        padding:15px;
        font-size:20px;
        background:#00d4ff;
        border:none;
        color:white;
        border-radius:8px;
        cursor:pointer;

    }

    </style>

    </head>

    <body>

    <h1>🛍️ Shopping Store</h1>

    <h2>Apple iPhone 17</h2>

    <h3>₹85,999</h3>

    <button>Add To Cart</button>

    </body>

    </html>

    """

app.run(host="0.0.0.0",port=5000)
