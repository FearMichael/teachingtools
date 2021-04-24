import React, { ReactNode, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { INames } from "../App";
import axios from "axios";

export interface ICardListProps {
  names: INames[];
  anotherThing: string;
};

export interface IPeople {
  id: number;
  name: string;
}

const CardList = ({ names, anotherThing }: ICardListProps) => {


  const [people, setPeople] = useState<IPeople[] | null>([]);

  const fetchPeople = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => setPeople(data)).catch(console.log);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (<div>
    {
      names.map((e, i) => (
        <Card style={{ width: '18rem' }} key={i}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Text>
              I am {e.age} years old!
          </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))
    }
    {
      people?.map((e) => (<p key={e.id}>{e.name}</p>))
    }
  </div>
  )
}

export default CardList;