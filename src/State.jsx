import React from "react";


class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            title: 'Student',
        }
    }
    render() {
        // console.log("Student");
        
        const plus = () => {
            if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 });
        }
            
        };
        const minus = () => {
            if (this.state.count > 1) {
                this.setState({ count: this.state.count - 1 });
            } else if (this.state.count = 1) {
                console.log("uzr");
            }
           
        };
        const onChange = (e) => {
            console.log(e.target.value);
            this.setState({ title: e.target.value });
        };
        const onCheck = (e) => { console.log(e.target.checked); 
        if (e.target.checked === true) {
            console.log("hello");
        }};
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>State {this.state.count}</h1>
                <input onChange={onChange} type="text" placeholder="name" />
                <input onChange={onCheck} type="checkbox" name="X" id="" />
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}

export default Student; 