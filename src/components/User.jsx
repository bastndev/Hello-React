import React, { useState, useEffect } from 'react';

export function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data[0])); // Set the first user
  }, []);

  return (
    <div>
      {user && (
        <div className="user">
          <img src={`https://robohash.org/${user.id}`} alt="User Avatar" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}