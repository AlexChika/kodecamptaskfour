import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [status, setStatus] = useState({
    loading: false,
    found: false,
    error: false,
  });
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setStatus({ ...status, loading: true, found: false, error: false });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(response.status);
      if (response.status >= 200 && response.status < 300) {
        const users = await response.json();
        console.log(users);
        setUsers([...users]);
        setStatus({ ...status, loading: false, found: true, error: false });
      }
    } catch (e) {
      setStatus({ ...status, loading: false, found: false, error: true });
    }
  };
  useEffect(() => {
    console.log("I was called");
    console.log(count);
    getUsers();
  }, [count]);
  return (
    <main className="app">
      <h1> KodeCamp Task Four</h1>
      <div>
        {status.loading && (
          <section className="loading">
            <article className="loading">
              <h2>Loading...</h2>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>
          </section>
        )}
        {status.error && (
          <section className=" error">
            <div>
              <h2>Error Occured</h2>
              <p>Please Check Your Internet and try again</p>
              <button onClick={() => setCount(count + 1)}>Refresh</button>
            </div>
          </section>
        )}
        {status.found && (
          <section className="container">
            {users.map((user) => {
              const { name, username, email, phone, company, address } = user;
              const { street, suite, city } = address;
              const { name: companyName, catchPhrase, bs } = company;
              return (
                <article className="card" key={user.id}>
                  <h2>{name}</h2>
                  <div className="company">
                    <p>{companyName}</p>
                    <p>{catchPhrase}</p>
                    <p>{bs}</p>
                  </div>
                  <div className="bio">
                    <h3>General Info</h3>
                    <div>
                      <p>Username</p>
                      <p>{username}</p>
                    </div>
                    <div>
                      <p>address</p>
                      <p>
                        <span>{street}</span>
                        <span>{suite}</span>
                        <span>{city}</span>
                      </p>
                    </div>
                    <div>
                      <p>email</p>
                      <p>{email}</p>
                    </div>
                    <div>
                      <p>phone</p>
                      <p>{phone}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}

        <section></section>
      </div>
    </main>
  );
}

export default App;
