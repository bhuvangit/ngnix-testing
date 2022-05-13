import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

/* eslint-disable */
const rootElement: HTMLElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
