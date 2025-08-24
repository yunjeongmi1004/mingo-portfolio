import Page from "../page"
import Wrap from "../shared/layout/Wrap"
import Header from "../shared/layout/Header"
import Aside from "../shared/layout/Aside"
import Nav from "../shared/layout/Nav"
import Container from "../shared/layout/Container"
import Footer from "../shared/layout/Footer"

const App = () => {
  return (
    <Wrap>
      <Header />
      <Aside />
      <Nav />
      <Container>
        <Page />
      </Container>
      <Footer />
    </Wrap>
  )
}

export default App