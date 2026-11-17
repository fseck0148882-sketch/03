import { useState } from "react"
import BookCard from "./components/BookCard"

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "Une si longue lettre", auteur: "Mariama Bâ", estDisponible: true },
    { id: 2, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: false },
    { id: 3, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: false },
    { id: 4, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true }
  ])
  const [titre, setTitre] = useState("")
  const [auteur, setAuteur] = useState("")

  const onClickEmprunt = (bookId) => {
    setBooks(books.map((b) => {
      if (b.id === bookId) {
        return { ...b, estDisponible: !b.estDisponible }
      }
      return b
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (titre === "" || auteur === "") {
      return
    }
    setBooks([...books, { id: Date.now(), titre: titre, auteur: auteur, estDisponible: true }])
    setTitre("")
    setAuteur("")
  }

  return (
    <div style={{ padding: "10px" }}>
      <h1>Livres disponibles : {books.filter((b) => b.estDisponible).length}</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Ajouter</button>
      </form>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "600px" }}>
        {books.map((b) => (
          <BookCard
            key={b.id}
            titre={b.titre}
            auteur={b.auteur}
            estDisponible={b.estDisponible}
            onClickEmprunt={() => onClickEmprunt(b.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App