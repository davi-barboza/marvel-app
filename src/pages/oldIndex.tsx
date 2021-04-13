import Head from 'next/head'
import ComicSearch from '../components/ComicSearch'
import { useMarvel } from '../context/MarvelResponseContext';
import { Container } from '../styles/pages/SpiderMan'

export default function Home() {
  const { setIdChar, idChar, setCharName, charName, charDescription, setCharDescription,
    setThumbnailChar, timeStamps, publicKey, hash } = useMarvel();

  async function handleSubmit() {

    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${charName}&ts=${timeStamps}&apikey=${publicKey}&hash=${hash}`)
      .then(response => { return response.json() })
      .then(response => {
        setIdChar(response.data.results[0].id);
        setCharName(response.data.results[0].name);
        setCharDescription(response.data.results[0].description);
        setThumbnailChar(response.data.results[0].thumbnail.path + '.' +
          response.data.results[0].thumbnail.extension);
        
        console.log(response.data.results[0].id)
      })
  }

  return (
    <Container>
      <Head>
        <title>Marvel | Home</title>
      </Head>

      <main>
        <div className="overlay" />
        
        <ComicSearch handleSubmit={handleSubmit} charName={ charName } charDescription={ charDescription } setCharName={ setCharName }/>
      </main>
 
    </Container>
  )
}
