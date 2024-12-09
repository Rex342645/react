import LogIn from "./components/LogIn"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
function App() {
  return (
    <UserContextProvider className='flex'>
      <h1> React Context Api </h1>
      <LogIn/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
