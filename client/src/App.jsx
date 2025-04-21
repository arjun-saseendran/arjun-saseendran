import { Card } from "./components/card/Card"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Content } from "./pages/Content"



export const App = () => {
	return ( 
< div className="min-h-screen flex flex-col">
  <header>
  <Header />
  </header>
  <main className="flex-grow">
    <section className="mx-2 md:mx-20 ">
     <Content/>
    </section>
  </main>
  
  <footer>
  <Footer />
  </footer>
	
</div>
		)
}