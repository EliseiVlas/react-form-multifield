import { useState } from 'react';

const marchioMacchine = [
    { id: 1, title: "Bmw" },
    { id: 2, title: "Mercedes" },
    { id: 3, title: "Audi" },
    { id: 4, title: "Opel" },
    { id: 5, title: "Toyota" },
  ];
// componente
export default function Main() {
    // stato della lista
    const [marchiMacchine, aggiungiMarchio] = useState(marchioMacchine);

    // stato del imput che ggiunge marchi di macchine
    const [nuovoMarchio, setNuovoMarchio] = useState('');

    // funzione di CB di aggiunta elemento alla todo
    const addTask = e => {
        e.preventDefault();

        const nuovoElemento = {
            id: marchiMacchine.length === 0 ? 1 : marchiMacchine[marchiMacchine.length - 1].id + 1,
            title: nuovoMarchio // Capitalizza la prima lettera
          };
        // modifica 
        aggiungiMarchio([...marchiMacchine, nuovoElemento]);
        setNuovoMarchio("")
    }

       // funzione di CB di cancellazione elemento dalla lista
        const eliminaMarchio = (id) => {
        const updatedTasks = marchiMacchine.filter((task) => {
            return task.id !== id
        });
        aggiungiMarchio(updatedTasks);
        
        
    }
    console.log(marchiMacchine);
    
    
    return (
        <> 
         {/* form di gestione lista */}
        <form onSubmit={addTask}>
            <input type="text" value={nuovoMarchio}
                onChange={event => { setNuovoMarchio(event.target.value) }}
            />
            <button type="submit">Invia</button>
        </form >
            
            {/*output lista  */}
        {marchiMacchine.map((task) => (
            <li key={task.id}>
                {task.title}
                {/* bottone di eliminazione elemento */}
                <button onClick={() => eliminaMarchio(task.id)}>
                    Elimina
                </button>
            </li>
         ))}
        </>
    )
}