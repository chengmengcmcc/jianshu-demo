import React, { Component } from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home/';
import Detail from './pages/detail';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/detail/:id" component={Detail} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;