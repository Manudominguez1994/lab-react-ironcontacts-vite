import { useState } from "react";
import "./App.css";
import allContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(30, 35));
const addContact = () =>{
  // console.log("Añando un nuevo contact");
  //Obtengo un numero aleatorio como max la longitud del array
  let randomNumber = Math.floor(Math.random()*allContacts.length)
  let randomContact = allContacts[randomNumber]
  // console.log(randomContact);
  //Hago el clon para no modificar el array inicial
  let clone = JSON.parse(JSON.stringify(contacts));
  //Añado el objeto randon al clone que he creado para renderizarlo
  clone.unshift(randomContact)
  //Atualizar la renderizacion con el contacto nuevo
  setContacts(clone)
}
const sortContactsName = () =>{
  console.log("Ordenar por nombre");
  //Como vamos a modificar el array hago una copia
  let clone = JSON.parse(JSON.stringify(contacts));
  //Aplico el metodo sort para ordenar y elijo name en este caso
  clone.sort((a1, a2)=>{
    return a1.name > a2.name ? 1 : -1;
  })
  //Actualizo la renderizacion con el orden nuevo
  setContacts(clone)
}
const sortContactsPopularity = () =>{
  console.log("Ordenar por popularity");
  //Como vamos a modificar el array hago una copia
  let clone = JSON.parse(JSON.stringify(contacts));
  //Aplico el metodo sort para ordenar y elijo popularity en este caso
  clone.sort((a1, a2)=>{
    return a1.popularity > a2.popularity ? -1 : 1;
  })
  //Actualizo la renderizacion con el orden nuevo
  setContacts(clone)
}
const deleteThisContact = (patata) => {
  console.log("borrar este es su indice :",patata);
  //Hago clon de nuevo porque vamos a modificar
   let clone = JSON.parse(JSON.stringify(contacts));
  //Aplicamos el metodo filter
  let arrFilter = clone.filter((eachContact, i) => i !== patata)
  setContacts(arrFilter)
} 
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortContactsPopularity}>Sort by popularity</button>
      <button onClick={sortContactsName}>Sort by name</button>

      <table>
        <thead>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
          <td>Won Oscar</td>
          <td>Won Emmy</td>
          <td>Actions</td>
        </thead>
        {contacts.map((eachContact, i) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src={eachContact.pictureUrl} width="80px" alt="" />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td>{eachContact.wonOscar === true ? "🏆" : null}</td>
                <td>{eachContact.wonEmmy === true ? "🌟" : null}</td>
                <td><button onClick={() => deleteThisContact(i)}>Delete</button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
