import Head from 'next/head'
import { Container } from '../styles/pages/Comics'
import { GetServerSideProps } from 'next';
import CryptoJS from 'crypto-js';
import ComicCard from '../components/ComicCard'

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

export default function Comics({comics}: ComicsData) {    

  return (
    <Container>
      <Head>
        <title>Spider Man | Comics</title>
      </Head>

      <main>
        <section>

          {comics.map((comic: any) => (
            <ComicCard key={comic.id}
              title={comic.title}
              thumbnail={comic.thumbnail.path + '.' + comic.thumbnail.extension}
              description={comic.description}
            />
          ))}
        </section>
      </main>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const publicKey = process.env.PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  const timeStamps = Math.floor(Date.now() / 1000)
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