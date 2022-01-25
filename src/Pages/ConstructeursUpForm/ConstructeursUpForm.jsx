import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ConstructeursAddForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formUp, setFormUp] = useState({
    societe: '',
    creation: '',
    pays: '',
  })

  useEffect(() => {
    axios.get('http://localhost:3000/constructeurs/' + id).then(res => {
      if (res.status === 200) {
        setFormUp(res.data)
      }
    })
  }, [])

  async function save() {
    await axios.put('http://localhost:3000/constructeurs/' + id, formUp)
    navigate('/constructeurs')
  }

  return (
    <>
      <h1>Formulaire Modif constructeurs</h1>
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
            value={formUp.societe}
            type="text"
            placeholder="Ex : Atari"
            required
            onChange={e => {
              let tmp = { ...formUp }
              tmp.societe = e.target.value
              setFormUp(tmp)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Année de création</Form.Label>
          <Form.Control
            value={formUp.creation}
            type="number"
            placeholder="Ex : 1973"
            required
            onChange={e => {
              let tmp = { ...formUp }
              tmp.creation = e.target.value
              setFormUp(tmp)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pays d'origine</Form.Label>
          <Form.Control
            value={formUp.pays}
            type="text"
            placeholder="Ex : Japon"
            required
            onChange={e => {
              let tmp = { ...formUp }
              tmp.pays = e.target.value
              setFormUp(tmp)
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
