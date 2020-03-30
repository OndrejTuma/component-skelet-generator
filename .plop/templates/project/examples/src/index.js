import React from 'react';
import {render} from 'react-dom';

import Component from '../../src';

function App() {
    return (
        <div>
            <h1>{{name}} component demo</h1>

            <Component/>
        </div>
    );
}

render(<App/>, document.getElementById('root'));