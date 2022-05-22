import './App.css'
import List from "./components/List"
import Profile from "./components/Profile"
import Link from './components/Link'
import Search from './components/Search'
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="page1">
        <Profile />
        <Link />
        <Search />
      </div>

      <div className="page2">
        <List />
      </div>
    </div>
  )
}

export default App
