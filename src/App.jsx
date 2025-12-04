import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'
import './App.css'

function App() {
  const entries = data.map(entry => {
      return (
        <Entry
            key={entry.id}
            {...entry}
        />
      )
  })

  return (
    <>
      <Header/>
      {entries}
    </>
  )
}

export default App
