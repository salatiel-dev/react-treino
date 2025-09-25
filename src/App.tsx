import ColoredUppercaseText from "./components/TextDisplay";
import Button from "./components/Button";

function App() {
  const texts = [
    { text: "Desafio-React", color: "green" },
    { text: "Olá, Mundo!", color: "orange" },
    { text: "Estou aprendendo React!", color: "gray" },
  ];

  return (
    <main className="app">
      <section className="container-coloredUppercaseText">
        {texts.map((item, index) => (
          <ColoredUppercaseText
            key={index}
            text={item.text}
            color={item.color}
          />
        ))}
      </section>
      <section className="container-button">
        <Button label="Baixar CV" aria-label="Botão para baixar CV" />
      </section>
    </main>
  );
}

export default App;
