import '../styles/App.css'
import { Editor } from './Editor'
/* 
TODO:
  Feature:
  - Highlighting property values
  - Auto-indentation
  - Row numbering
  - Toggle comment
  - Color preview
  - Copy content
  Bug:
  - Shift + tab not working
  - Tabbing multiple lines only inserts at the final line
  - Italic property values
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
