/**
 * Frontend JavaScript for prediction-able
 */

/**
 * Fetch message from backend API
 */
async function fetchBackendMessage() {
    const messageDiv = document.getElementById('backend-message');
    const button = document.getElementById('fetch-button');
    
    try {
        button.disabled = true;
        button.textContent = 'Loading...';
        messageDiv.textContent = '';
        
        const response = await fetch('/api/hello');
        const data = await response.json();
        
        if (data.status === 'success') {
            messageDiv.textContent = data.message;
            messageDiv.classList.add('success');
        } else {
            messageDiv.textContent = 'Error fetching message';
            messageDiv.classList.add('error');
        }
    } catch (error) {
        messageDiv.textContent = 'Failed to connect to backend: ' + error.message;
        messageDiv.classList.add('error');
    } finally {
        button.disabled = false;
        button.textContent = 'Get Message from Backend';
    }
}
