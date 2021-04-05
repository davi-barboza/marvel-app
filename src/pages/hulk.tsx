import Head from 'next/head'
import { Container } from '../styles/pages/Comics'
import { GetServerSideProps } from 'next';
import CryptoJS from 'crypto-js';
import ComicCard from '../components/CarouselComics/ComicCard'
import Audio from '../components/Audio';
import NavBar from '../components/NavBar';
import SocialMedia from '../components/SocialMedia';

interface IComics {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }

}
interface ComicsData {
  comics: IComics[];
}

const Hulk: React.FC<ComicsData> = ({comics}) => {    

  return (
    <Container>
      <Head>
        <title>Spider Man | Comics</title>
      </Head>

      <Audio />
      <NavBar />
      <SocialMedia />

      <main>
        <section>

          {comics.map((comic: any) => (
            <ComicCard key={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
            />
          ))}
        </section>
      </main>

    </Container>
  )
}

export default Hulk;

export const getServerSideProps: GetServerSideProps = async () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const timeStamps = Date.now()
  const hash = CryptoJS.MD5(timeStamps + privateKey + publicKey).toString();
  const hulk = 1009351;

  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${hulk}/comics?ts=${timeStamps}&apikey=${publicKey}&hash=${hash}`)

  const data = await response.json();

  return {
    props: {
      comics: data.data.results,
    }
  }
}