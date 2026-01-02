import Gallery from "./components/Gallery";
import principal from "./assets/principal.png";


function App() {
  return (
    <>
      <header
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "1.5rem",
  }}
>
  <img
    src={principal}
    alt="BeerAlbum"
    style={{
      maxWidth: "320px",
      width: "90%",
    }}
  />
  <h1>Bienvenidos a mi galería de latas de cerveza coleccionables.</h1>
  <p style={{ maxWidth: "900px", opacity: 0.9 }}>
Este es un proyecto personal, creado para los aficionados que disfrutan coleccionando latas.
No tiene fines de lucro, pero cualquier aporte es de gran ayuda para el mantenimiento de los servidores y la base de datos que hacen posible esta galería.
Además, siempre se agradece la colaboración de quienes quieran aportar información, corregir datos o sumar nuevas entradas a la colección.
</p>

<p>¡Gracias por ser parte de esta comunidad de coleccionistas!</p>

  
</header>

      <section style={{ paddingBottom: "4rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Colección
        </h2>
        <Gallery />
      </section>
    </>
  );
}

export default App;
