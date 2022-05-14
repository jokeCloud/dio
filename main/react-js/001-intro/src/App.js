import React from "react";

const btnA = <button>Histórico de clientes</button>
const btnB = <button>Cadastrar clientes</button>
const hasCostumer = true

const listCustomer = [
  {
    id: 1,
    name: 'Jesus',
    skills: ['JS', 'Python']
  },
  {
    id: 2,
    name: 'Maria',
    skills: ['html', 'css']
  },
  {
    id: 3,
    name: 'José',
    skills: ['c++', 'assembly']
  },
  {
    id: 4,
    name: 'João',
    skills: ['node', 'reactJS']
  }
]

const showEvent = (e) => {
  console.log('clicado')
  console.log(e)
}

const buttonEvent = <button onClick={showEvent}>Mostrar evento</button>

const App = () => {    
  const renderShowHistory = () => (
    <div>
      Clique no botão abaixo para o histórico de cliente<br />
      {btnA}
    </div>
  )

  const renderAddCostumer = () => (
    <div>
      Clique no botão abaixo para cadastrar o cliente<br />
      {btnB}
    </div>
  )

  const costumer = 'Em'

  const showCustomer = () => {
    if (!hasCostumer) return null
    
    return (
      <div>
        <p>Nome do cliente: {costumer}</p>
      </div>
    )
    
  }

  const renderCustomer = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) =>  {
    return (
      <div key={`skill-${index}`} style={{paddingLeft: '30px'}}> {/*não utilizar estilização css inline, má prática*/}
        <li>{skill}</li>
      </div>
    )
  }

  const handleChange = (e) => {
    const {value} = e.target
    console.log(value)
  }

  return (
    <div>
      <div>
        <h1>First Software</h1>
        {hasCostumer ? renderShowHistory() : renderAddCostumer()}
      </div>
        <div>
        {showCustomer()}
      </div>
      <div>
        {listCustomer.map(renderCustomer)}
      </div>
      <div>
        <input onChange={handleChange} />
        {buttonEvent}
      </div>
    </div>
  )
}

export default App;

