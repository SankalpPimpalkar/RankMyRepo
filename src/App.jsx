import Container from "./components/Container";
import InputBar from "./components/InputBar";
import SearchResults from "./components/SearchResults";

export default function App() {
  return (
    <Container>
      <InputBar />
      <SearchResults />
    </Container>
  )
}
