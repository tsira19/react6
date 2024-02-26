import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import File from './File';
import Footer from './Footer';

class App extends Component{
    render() {
        return (
            <React.Fragment>
                <Header />
                <File />
                <Footer />
            </React.Fragment>
        )
    }

}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);