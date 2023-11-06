import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: this._getCurrentTime()
        }
    }

    _getCurrentTime() {
        const d = new Date();
        const hours = now.getHours();
        return {
            hours: ('0' + (hours > 12 ? hours - 12 : hours)).slice(-2),
            minutes: ('0' + now.getMinutes()).slice(-2),
            seconds: ('0' + now.getSeconds()).slice(-2)

        }
    }

    componentDidMount() {
        this.intervalId = setInterval(function() {

        }, 1);
    }

    
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice: </h2>
                <Clock
                    hours={'02'}
                    minutes={32}
                    seconds={54}
                    session={'pm'} 
                    />
            </div>
        );
    }
}