import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useHistory} from 'react-router-dom';

function App() {
    const {push} = useHistory()

    const ghurl = "https://github.com/login/oauth/authorize" +
        "?client_id=8117784c80d8d9ea3b5d" +
        "&redirect_uri=https://dash-test.gavinfenton.com/test" +
        "&scope=repo,repo_deployment,notifications,workflow"

    const tryThis = () => fetch(ghurl, {mode: 'no-cors', redirect: 'follow'})
        .then(response => {
            console.log(response)
            push(response.url)
        })
        .catch(console.error)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <a href="https://github.com/login/oauth/authorize">github</a>

                <button onClick={tryThis}>try</button>
            </header>
        </div>
    );
}

export default App;
