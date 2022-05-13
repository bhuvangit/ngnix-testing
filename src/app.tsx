import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dummy from './dummy';

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dummy />} />
            </Routes>
        </BrowserRouter>
    );
};

App.displayName = 'App';

App.defaultProps = {
    name: false
};

export default App;
