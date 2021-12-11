import React, { ReactNode, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { INames } from "../../../App";
import axios from "axios";
import { formatDate } from "../../../utils/pipes.utils";

export interface ICardListProps {
  names: INames[];
  anotherThing: string;
};

export interface IPeople {
  id: number;
  name: string;
}

const CardList = ({ names, anotherThing }: ICardListProps) => {

  const [state, setState] = useState<IPeople[] | null>(null);
  const [list, setList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  
  const now = new Date().toDateString();

  const fetchPeople = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => setState(data)).catch(console.log);
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

  return (
    <div className="card-list">
      <p>{formatDate(now, "MM/DD/YYYY hh:mm a")}</p>
      <h3>{count}</h3>
      {
        names.map((e, i) => (
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text className="special-text">
                I am {e.age} years old!
          </Card.Text>
              <Button variant="primary" onClick={someMethod}>Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
      {
        state?.map((e) => (<p key={e.id}>{e.name}</p>))
      }
      {
        list?.map((e, i) => (<p key={i}>{e}</p>))
      }
    </div>
  )
}

export default CardList;

// class FakeComponent extends React.Component {

//   constructor(props) { }

//   state = {
//     someValue: 123,
//     anotherVal: "hi"
//   };

//   getSomeData() {

//     const newData = {};
//     // get info async
//     this.setState({ ...this.state, ...newdata })
//   }

//   render() {
//     const someVal = "hey there";

//     return (
//       <>
//         <h2>{this.state.someValue}</h2>
//       </>
//     )
//   }

// }

// export FakeComponent;