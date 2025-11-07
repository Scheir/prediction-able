"""
Main application entry point for prediction-able
"""
from backend.app import app

if __name__ == '__main__':
    print("Starting prediction-able web application...")
    print("Visit http://localhost:5000 in your browser")
    app.run(debug=True, host='0.0.0.0', port=5000)
