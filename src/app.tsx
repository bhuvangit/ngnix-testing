import axios from 'axios';

const App = (): JSX.Element => {
    const jsonApi = (): void => {
        axios.get('https://jsonplaceholder.typicode.com/todos');
    };

    const getState = (): void => {
        axios.get(
            `https://ezzt7okgyl.execute-api.ap-south-1.amazonaws.com/Prod/api/StateMaster/GetAll`
        );
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <button onClick={jsonApi}>Json place holder</button>
            <button onClick={getState}>state </button>
        </div>
    );
};

App.displayName = 'App';

App.defaultProps = {
    name: false
};

export default App;
