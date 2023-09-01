export default function App() {
  return (
    <div>
      <h1>Meu primeiro projeto</h1>
      <Aluno nome="Josefa da Silva" idade={30}/>
      <Aluno nome="João da Silva" idade={25}/>
    </div>
  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
  return(
    <>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </>
  )
}
