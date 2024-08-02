// TestDriveForm.js
import React from 'react';
import './Testdrive.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function TestDriveForm() {

  return (
    <div className="test-drive-wrapper">
      <form className="test-drive-form">
        <h1>Request a Test Drive</h1>
        <input type="text" className="input-field" placeholder="Full Name" required />
        <input type="email" className="input-field" placeholder="Email" required />
        <input type="text" className="input-field" placeholder="Phone Number" required />
        <input type="date" className="input-field" required />
        <textarea className="message-box" placeholder="Additional Comments" rows="4"></textarea><br></br>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default TestDriveForm;
