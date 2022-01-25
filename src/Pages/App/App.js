import AppNavbar from '../../Components/AppNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'

import HomePage from './../HomePage/HomePage'
import ConstructeursPage from './../ConstructeursPage/ConstructeursPage'
import ConstructeursAddForm from './../ConstructeursAddForm/ConstructeursAddForm'

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Container>
          <Row>
            <Col md={12}>
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                  path="/constructeurs"
                  element={<ConstructeursPage />}
                ></Route>
                <Route
                  path="/constructeurs/add"
                  element={<ConstructeursAddForm />}
                ></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
