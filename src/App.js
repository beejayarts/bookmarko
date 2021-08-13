
import './App.css';
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Features from '../src/components/Features'
import Extension from '../src/components/Extension'
import Faq from '../src/components/Faq'
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


const  App = () =>{
  return(
    <>
  <Header/>
  <Hero/>
  <Features/>
  <Extension/>
  <Faq/>
  <Newsletter/>
  <Footer/>
    </>
  )
}

export default App;