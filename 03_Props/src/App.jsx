

import Card from "./components/Card";
const App = () => {
  return (
    <div className="parent">
      <Card user="kushagra" age={22} />
      <Card user="tushar" age={23} />
      <Card user="tanmay" age={24} />
    </div>
  )
}

export default App