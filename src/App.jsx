import NavBar from "./components/navbar"
import SideBar from "./components/sidebar"
import MessageArea from "./components/messagearea"
import Search from "./components/search"
import ListMessage from "./components/listmessage"
import Loading from "./components/loading"


function App() {
  return <>
  <SideBar></SideBar>
  <div className="navmessage">
  <NavBar></NavBar>
  <div className="navsearchsec">
    <MessageArea></MessageArea>
    <ListMessage></ListMessage>
    <Loading></Loading>
  <Search></Search>
  </div>
  </div>
  
  </>
}

export default App
