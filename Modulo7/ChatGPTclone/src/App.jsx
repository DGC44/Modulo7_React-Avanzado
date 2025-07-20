import { useState } from 'react'
import './App.css'

const mock_Messages = [
  { text: "Hola", sender: "user" },
  { text: "Hola, ¿en qué te puedo ayudar hoy?", sender: "LLM" },
  { text: "Quiero que me digas un chiste", sender: "user" },
  { text: "¿Cuál es el animal más antiguo del mundo?", sender: "LLM" },
  { text: "¿El dinosaurio?", sender: "user" },
  { text: "¡No!. La cebra, ¡porque está en blanco y negro!", sender: "LLM" },
]


function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(mock_Messages)

  function sendMessage() {
    console.log("Enviando mensaje", input)


    /* Paso por paso...
    const new_messages = [...messages]
    const new_message = { text: input, sender: "user" }
    new_messages.push(new_message)
    setMessages(new_messages)
    */

    setMessages((prev) => [...prev, {text: input, sender: "user"}])

    //Simular respuesta
    setTimeout(() => {
      setMessages((prev) => [...prev, {text: "Lo siento hubo un problema con el servidor", sender: "LLM"}])
    },1000)
  }

  return (
    <>

    <div>
      {messages.map((message, i) => <p key={i} style={message.sender == "user" ? {color: "blue"} : {color: "red"}}>{message.text}</p>)}
    </div>

      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </>
  )
}

export default App
