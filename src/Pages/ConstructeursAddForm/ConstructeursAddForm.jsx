import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ConstructeursAddForm() {
  const navigate = useNavigate()
  const [formAdd, setFormAdd] = useState({
    societe: '',
    creation: '',
    pays: '',
  })

  async function save() {
    console.log(formAdd)
    await axios.post('http://localhost:3000/constructeurs/add', formAdd)
    navigate('/constructeurs')
  }

  return (
    <>
      <h1>Formulaire Ajout constructeurs</h1>
      <hr />

      <Form
        onSubmit={e => {
          e.preventDefault()
          save()
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Societe</Form.Label>
          <Form.Control
            value={formAdd.societe}
            type="text"
            placeholder="Ex : Atari"
            required
            onChange={e => {
              let tmp = { ...formAdd }
              tmp.societe = e.target.value
              setFormAdd(tmp)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Année de création</Form.Label>
          <Form.Control
            value={formAdd.creation}
            type="number"
            placeholder="Ex : 1973"
            required
            onChange={e => {
              let tmp = { ...formAdd }
              tmp.creation = e.target.value
              setFormAdd(tmp)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pays d'origine</Form.Label>
          <Form.Control
            value={formAdd.pays}
            type="text"
            placeholder="Ex : Japon"
            required
            onChange={e => {
              let tmp = { ...formAdd }
              tmp.pays = e.target.value
              setFormAdd(tmp)
            }}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Enregistrer
        </Button>
      </Form>
    </>
  )
}
