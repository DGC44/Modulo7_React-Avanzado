import { useContext } from 'react'
import './App.css'
import Child from './components/Child'
import Parent from './components/Parent'
import { AppContext } from './contexts/Provider'


function App() {
  // Paso opcional, usarlo en otro lado
  const { value } = useContext(AppContext)

  return (
    <>
      <h1>El valor es {value}</h1>
      <Parent>
        <Parent>
          <Parent>
            <Parent>
                <Parent>
                  <Parent>
                    <Parent>
                      <Parent>
                        <Child />
                      </Parent>
                    </Parent>
                  </Parent>
                </Parent>
            </Parent>
          </Parent>
        </Parent>
      </Parent>
    </>
  )
}

export default App