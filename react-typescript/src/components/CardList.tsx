import React, { ReactNode } from "react";
import { Card, Button } from "react-bootstrap";
import { INames } from "../App";

export interface ICardListProps {
  names: INames[];
  anotherThing: string;
};

const CardList = ({ names, anotherThing }: ICardListProps) => {

  console.log({ names });
  console.log({ anotherThing });

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
  </div>
  )
}

export default CardList;