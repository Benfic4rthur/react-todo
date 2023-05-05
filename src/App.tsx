import React from 'react';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturação de props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';

//6 - importação de componentes com estado
import State from './components/State';
import { Category } from './components/Destructuring';
import { createContext } from 'vm';
import Context from './components/Context';

// 9 - Type
type textOrNull = string | null;

// 10 - conextt api
interface IAppContext{
  language: string;
  framework: string;
  project: number;
}
export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name:string = "Arthur";
  const age:number = 32;
  const isDeveloper:boolean = true;

  // 2 - funções
  const userGreeting = (name:string):string => { // :string é o tipo de retorno da função
    return `Olá ${name}`;
  }

  // 9 - Types
  const text:textOrNull = null;
  let text2:textOrNull = 'texto';

  // 10- conextt api
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    project: 5,
  }; 

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
    <h1>REACT</h1>
    <h2>{name}, você tem {age} anos</h2>
    {isDeveloper ? <h2>Trabalha como dev</h2> : <h2>Não trabalha como dev</h2>} 
    <h3>{userGreeting(name)}</h3>
    <FirstComponent />
    <SecondComponent name={name} />
    <Destructuring title="Título" content="Conteúdo" comentsQty={10} tags={['React', 'Typescript', 'Python']} category={Category.TS}/>
    <State />
    {text && <h2>texto nulo</h2>}
    {text2 ? <h2>{text2}</h2> : <h2>Texto nulo</h2>}
    <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;
