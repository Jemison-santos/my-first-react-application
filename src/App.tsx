import { Header } from "./components/header";
import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div>
      <Header title='Aula 02 de React'/>

      <Aluno nome="Josefa da Silva" idade={30}/>
      <Aluno nome="João da Silva" idade={25}/>

      <Footer/>
    </div>
  )
}
