import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MembersLogin.css';


const MembersLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginType } = useParams();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    // You can use the username and password state values to perform authentication
    // For demo purposes, we'll just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="members-login-container">
      <div className="members-login-form">
        <h2>{loginType === 'user' ? 'User Login' : 'Orphanage Login'}</h2>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="buttons-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <Link to="/">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersLogin;
                                                                                                                                                                                                                                                                                                                         import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/MembersLogin.css';


const MembersLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginType } = useParams();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    // You can use the username and password state values to perform authentication
    // For demo purposes, we'll just log the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="members-login-container">
      <div className="members-login-form">
        <h2>{loginType === 'user' ? 'User Login' : 'Orphanage Login'}</h2>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="buttons-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <Link to="/">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersLogin;
