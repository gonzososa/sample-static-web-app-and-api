import React, { lazy, Suspense }  from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './About'
import Products from './products/Products'

import 'bulma/css/bulma.css';
import '../styles.scss';

function App () {

    return (
        <div>
            <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" Component={Products} />
                        <Route path="/about" Component={About} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
            </main>
        </div>
    );

}

export default App;