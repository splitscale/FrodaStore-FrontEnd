
import Head from "next/head"
import NavBar from "../components/navBar"
import AddContainer from "../components/AddContainer"
import ListOfContainer from "../components/listOfContainer";


function Home() {
  return (
    <div>
      
      <Head>
        <title>FordaStore</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/main-logo.png' />
      </Head>
      <NavBar />
      <main>
        <AddContainer/>
        <ListOfContainer/>
      </main>

    </div>
  )
}

export default Home;