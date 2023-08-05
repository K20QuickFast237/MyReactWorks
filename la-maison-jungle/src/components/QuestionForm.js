import React, { useState } from 'react'

// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }


export default function QuestionForm() {
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    const isInputError = inputValue.includes('f')
    function checkValue(value){
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
  return (
<div>
    <textarea 
        value={inputValue}
        onChange={(e)=>checkValue(e.target.value)}
    />
    <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    {isInputError && (
    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
)}
</div>
  )
}

    // <form onSubmit={handleSubmit}>
    //     <input type='text' name='my_input' defaultValue={'Tapez votre texte'} />
    //     <button type='submit'>Entrer</button>
    // </form>