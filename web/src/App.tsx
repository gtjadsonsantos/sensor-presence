import React, {useState} from "react";


function App() {
  const [dateStart,setDateStart] = useState<Date | null> ()
  const [dateEnd,setDateEnd] = useState<Date | null> ()
  

  function search(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

  }


  return (
    <>
      <div id="container-modal">
       <h1>Bem Vindo ao Consulta Sensor</h1>

       <form id="form-model" action="" method="post" onSubmit={e => search(e) }>
         <input type="datetime-local" name="date-start" id="date-start" onChange={input => setDateStart(new Date(input.target.value))} />
         <input type="datetime-local" name="date-end" id="date-end" onChange={input => setDateStart(new Date(input.target.value))} />
         <button type="submit">Pesquisar</button>
       </form>

      </div>
      <div id="container-logbook">
        <h2>Logbook</h2>
        <ul id="logbook">
          <div className="logbook-item">
            <li>0</li>
            <li>Senac florinópolis / Sala 201 </li>
            <li>10/21/2077 10:00:00</li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;
