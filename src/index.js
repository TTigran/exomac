import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import reducer from "./redux/store";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";


// CSS File Here
import 'swiper/css';
import "aos/dist/aos.css";
import 'react-modal-video/scss/modal-video.scss';
import './assets/scss/style.scss';

const store = createStore(reducer, applyMiddleware(thunk));


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={ store }>
        <App />
    </Provider>,
);




