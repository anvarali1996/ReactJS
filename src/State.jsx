import React from "react";
import { student } from "./mock";


class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: student,
            name: 'Anvarjon',
            surname: 'Sheraliev',
        }
    }
    render() {
        const onnameChange = (e) => {
            console.log(e.target.value);
            this.setState({ name: e.target.value });
        };
        const onsurnameChange = (e) => {
            console.log(e.target.value);
            this.setState({ surname: e.target.value });
            if (e.target.value === "jon") {
                console.log('you CANNOT');
            }
        };

        const onFilter = (e) => {
            console.log(e.target.value);
            let res = student.filter((value) => value.name.includes(e.target.value));
            this.setState({
                data: res,
            })
        };
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h1>Surname: {this.state.surname}</h1>
                <input onChange={onnameChange} type="text" placeholder="name" />
                <input onChange={onsurnameChange} type="text" placeholder="surname" />
                <hr />
                <input onChange={onFilter} type="text" placeholder="filter" />
                {
                    this.state.data.map(({ id, name, email }) => {
                        return (
                            <h1 key={id}>{id} {name} {email}</h1>
                        )
                    })
                }
            </div>
        )
    }
}

export default Student; 