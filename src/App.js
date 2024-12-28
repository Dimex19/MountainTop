import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: '/', element: _jsx(Home, {}) }) }) }) }));
}
export default App;
