import React from 'react';
import Header from './Header';

const App = (props) => {
    return (
        <div>
            <Header/>
            <div className="container">
                { props.children }
            </div>
            
            <footer className="page-footer center-align custom-footer">
                <div className="footer-copyright">
                    <div className="container">
                        Made with <i className="material-icons tiny">favorite</i> by <a href="https://github.com/mesqfel" target="_blank" className="customLink">Felipe Mesquita</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
