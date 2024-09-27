import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./components/App/App";

import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear);
dayjs.locale('ko');

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(<App />);
