import React, { useState } from "react";

class Fun extends React.Component {
    state = {
        number: 0
    }

    clickyTime = () => {
        this.setState((state) => ({
            number: state.number + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>Hello Jeremy</h1>
                <button onClick={this.clickyTime}>
                    Click Here to Win!
            </button>
                <h1>{this.state.number}</h1>
            </div>
        )
    };
};
// const Fun = () => {

//     const [clicks, updateClicks] = useState(null);

//     const decrease = () => {
//         updateClicks(clicks - 1);
//     }

//     return (
//         <div>
//             <button onClick={() => updateClicks(clicks + 1)}>
//                 Click me!
//             </button>
//             {(clicks &&
//                 <h1>{clicks}</h1>
//             ) || null}
//             <button onClick={decrease}>
//                 Don't Click!
//             </button>
//         </div>
//     )
// }

export default Fun;