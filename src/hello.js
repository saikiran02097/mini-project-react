import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
class Hello extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a data-toggle="dropdown"> <span class="glyphicon glyphicon-log-in"></span> Login </a>
                                <ul class="dropdown-menu">

                                    <li>>Admin Login</li>

                                    <li><Link to={'/InterviewerLogin'}>Interviewer Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Hello;
