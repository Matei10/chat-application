
import './App.css';
import {ChatEngine} from 'react-chat-engine'

function App() {
  return (
    <div className="App">
      <ChatEngine
			height='100vh'
			userName='Madam sudah'
			userSecret='12345678'
			projectID='b03dd325-e8f4-45db-9ca7-0505a3ad6a6e'
		/>
    
    </div>
  );
}

export default App;
