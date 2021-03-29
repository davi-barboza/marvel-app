import Head from 'next/head'
import { useMarvel } from '../context/MarvelResponseContext';
import { Container } from '../styles/pages/Home'
import Audio from '../components/Audio'
import NavBar from '../components/NavBar'
import SocialMedia from '../components/SocialMedia'
import marvel from '../assets/marvel.png'

const Home: React.FC = () => {


  return (
    <Container>
      <Head>
        <title>Marvel | Home</title>
      </Head>

      <Audio />

      <img src={marvel} alt="Marvel"/>

      <NavBar />
      
      <SocialMedia />
 
    </Container>
  )
}

export default Home;