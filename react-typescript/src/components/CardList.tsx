import React, { ReactNode, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { INames } from "../App";
import axios from "axios";
import { AnyARecord } from "node:dns";

export interface ICardListProps {
  names: INames[];
  anotherThing: string;
};

export interface IPeople {
  id: number;
  name: string;
}

const CardList = ({ names, anotherThing }: ICardListProps) => {

  const [people, setPeople] = useState<IPeople[] | null>(null);
  const [list, setList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const fetchPeople = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => setPeople(data)).catch(console.log);
  };

  const search = "Johnny Depp";
  const reload = false;

  const cleanup = () => {
    console.log("Cleaning up!!");
  }

  const myEffect = () => {
    fetchPeople();
    return cleanup();
  }

  const someOtherEffect = () => {
    console.log("EFFEECCTT");
  }

  const someMethod = (e: any) => {
    console.log(e);
    // setList([...list, e.target.nodeName]);
    setCount(count + 1);
  }

  useEffect(myEffect, []);

  return (<div>
    <h3>{ count }</h3>
    {
      names.map((e, i) => (
        <Card style={{ width: '18rem' }} key={i}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              I am {e.age} years old!
          </Card.Text>
            <Button variant="primary" onClick={someMethod}>Go somewhere</Button>
          </Card.Body>
        </Card>
      ))
    }
    {
      people?.map((e) => (<p key={e.id}>{e.name}</p>))
    }
    {
      list?.map((e, i) => (<p key={i}>{ e }</p>))
    }
  </div>
  )
}

export default CardList;