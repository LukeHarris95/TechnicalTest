import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import SignUp from './SignUp';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="MainPage">
                <NavBar />
                <Home />
                <About />
                <SignUp />
                <Footer />
            </div>
            );
    }
}
