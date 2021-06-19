import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from "dayjs";
import { Button, Card } from 'react-bootstrap';
import CardList from './components/CardList';

export interface INames {
  name: string,
  age: number
}

function App() {

  const myVal = 31;
  const names: INames[] = [{ name: "joe", age: 4.5 }, { name: "ryan", age: 47 }, { name: "Toni", age: 22 }];
  const anotherThing = "Hiiii!!!!";

  return (
    <div className={myVal > 30 ? 'App' : 'Body'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>The Peeps @ {dayjs().format("MM/DD/YYYY")}!</h1>
      <CardList names={names} anotherThing={anotherThing} />
    </div>
  );
}

export default App;
