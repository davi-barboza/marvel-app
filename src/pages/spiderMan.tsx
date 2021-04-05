import Head from 'next/head'
import { Container } from '../styles/pages/Comics'
import { GetServerSideProps } from 'next';
import CryptoJS from 'crypto-js';
import Audio from '../components/Audio';
import NavBar from '../components/NavBar';
import CarouselComics from '../components/CarouselComics';
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

export default function Comics({ comics }: ComicsData) {

  return (
    <Container>
      <Head>
        <title>Spider Man | Comics</title>
      </Head>

      <main>
        <section>
          
            <CarouselComics comics={comics}/>
          
        </section>

        <Audio />
        <NavBar />
        <SocialMedia />
      </main>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;

  const timeStamps = Date.now()
  const hash = CryptoJS.MD5(timeStamps + privateKey + publicKey).toString();
  const spiderManId = 1009610;

  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${spiderManId}/comics?ts=${timeStamps}&apikey=${publicKey}&hash=${hash}`)

  const data = await response.json();

  return {
    props: {
      comics: data.data.results,
    }
  }
}