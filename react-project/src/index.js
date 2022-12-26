import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/redux/store'
import { AuthProvider } from './context/AuthProvider';
import axios from 'axios';
// ReactDOM.render(<App />,document.getElementById('root'));

axios.defaults.baseURL = 'http://localhost:8080/'
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)