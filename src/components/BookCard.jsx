export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{ border: "1px solid grey", padding: "20px", borderRadius: "20px", width: "250px" }}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  )
}