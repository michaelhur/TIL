import './app.css';

function App() {
  const name = "mike";
    return (
        <>
            <h1>hello</h1>
            {name && <h1> hello {name}!</h1>}
            {
                [1,2,3].map(item => (<h1>item</h1>))
            }
        </>
    )
}

export default App;
