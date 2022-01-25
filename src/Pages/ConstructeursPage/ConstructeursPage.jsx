import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function ConstructeursPage() {
  const [constructeurs, setConstructeurs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/constructeurs').then(res => {
      if (res.status === 200) {
        setConstructeurs(res.data)
      }
    })
  }, [])

  let display = constructeurs.map((constructeur, indice) => {
    return (
      <tr>
        <td>{indice + 1}]</td>
        <td>{constructeur.societe}</td>
        <td>{constructeur.creation}</td>
        <td>{constructeur.pays}</td>
        <td>
          <Button variant="warning">Modifier</Button>
        </td>
        <td>
          <Button variant="danger">Supprimer</Button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <h1>Liste des constructeurs</h1>
      <hr />

      <Button as={Link} to="/constructeurs/add">
        Ajouter
      </Button>

      <Table striped hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Constructeur</th>
            <th>Création</th>
            <th>Pays</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>{display}</tbody>
      </Table>
    </>
  )
}
