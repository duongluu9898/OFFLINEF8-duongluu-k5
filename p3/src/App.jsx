import { useState, useEffect } from "react";
const apiUrl = `https://jsonplaceholder.typicode.com/users`;

export default function App() {
  const [users, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isShow, setShow] = useState(true);
  const [error, setError] = useState(false);

  const getUser = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (error) {
    return <h2>This is Error</h2>;
  }
  return (
    <div>
      <button onClick={() => setShow(!isShow)}>Toggle</button>
      {isShow && (
        <>
          <h2>Users</h2>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            users.map(({ id, name }) => <h3 key={id}>{name}</h3>)
          )}
        </>
      )}
    </div>
  );
}
