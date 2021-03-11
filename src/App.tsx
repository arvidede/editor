import './App.css'
import { Editor } from './Editor'
/* 
TODO:
  Feature:
  - Highlighting property values
  - Auto-indentation
  Bug:
  - Collapsing multiple spaces
  - Jumping caret on bracket insert 
*/

function App() {
    return (
        <div className='App'>
            <h1>CSS 🤪</h1>
            <Editor />
        </div>
    )
}

export default App
