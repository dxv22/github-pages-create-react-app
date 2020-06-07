import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        const nDate= new Date();
        this.state = {
            day: "",
            date: (("0" + nDate.getDate()).slice(-2) + '/' + ("0" + (nDate.getMonth()+1)).slice(-2) + '/' + nDate.getFullYear()),
            time: (("0" + nDate.getHours()).slice(-2)+ ':' + ("0" + nDate.getMinutes()).slice(-2) + ':' + ("0" + nDate.getSeconds()).slice(-2))
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
        this.dayOfWeek();
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: (new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
        });
    }

    dayOfWeek() {
        let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let day = new Date().getDay();
        this.setState({
            day: dayArr[day]
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                <h2>{this.state.day}</h2>
                <h2>{this.state.date}</h2>
            </div>
        );
    }
};

export default Clock;