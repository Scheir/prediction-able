"""
Backend Flask application for prediction-able
"""
from flask import Flask, jsonify, render_template

app = Flask(__name__, 
            template_folder='../templates',
            static_folder='../static')


@app.route('/')
def index():
    """Render the main page"""
    return render_template('index.html')


@app.route('/api/hello')
def hello():
    """Simple API endpoint returning Hello World"""
    return jsonify({
        'message': 'Hello World from the backend!',
        'status': 'success'
    })


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
