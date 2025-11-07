# prediction-able

A Python web application with frontend and backend components.

## Project Structure

```
prediction-able/
├── backend/           # Backend Python code
│   ├── __init__.py
│   └── app.py        # Flask application
├── frontend/         # Frontend-specific files (reserved for future use)
├── static/           # Static files (CSS, JS, images)
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── templates/        # HTML templates
│   └── index.html
├── app.py           # Main application entry point
├── requirements.txt # Python dependencies
└── README.md
```

## Features

- **Backend**: Flask-based REST API
  - Hello World API endpoint at `/api/hello`
  - Serves the frontend application
  
- **Frontend**: HTML/CSS/JavaScript
  - Modern, responsive UI
  - Interactive "Hello World" demonstration
  - Communicates with backend API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Scheir/prediction-able.git
   cd prediction-able
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

Start the web server:
```bash
python app.py
```

Then open your browser and navigate to:
```
http://localhost:5000
```

You should see the "Hello World" web application with:
- A greeting from the frontend
- A button to fetch a message from the backend API

## API Endpoints

- `GET /` - Main page (serves the frontend)
- `GET /api/hello` - Returns a JSON response with a hello message

## Development

The application uses Flask in debug mode for development. Any changes to Python files will automatically reload the server.

### Frontend Development
- HTML templates are in `templates/`
- CSS styles are in `static/css/`
- JavaScript files are in `static/js/`

### Backend Development
- Backend code is in `backend/`
- Main Flask app is in `backend/app.py`

## License

This project is open source and available under the MIT License.
