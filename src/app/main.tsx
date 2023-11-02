import styles from './page.module.css';
import Grid from '@mui/material/Grid';

import CardCharacter from '../components/CardCharacter';

import { request, gql } from 'graphql-request'; 


export const Main = async () => {

  const data: any = await getServerSideProps();

  const characters = data.props.characters;
  return (
    <main className={styles.main}>
      <div>
      <h1>Rick and Morty</h1>
      <hr />
      <br />
      <br />
      <br />

      <div className="section-characters">
        <Grid container spacing={2}>
          {characters.map((character: any) => (
            <Grid item xs={12} sm={6} md={4} key={character.id}>
              <CardCharacter character={character} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
    </main>
  )
}


export async function getServerSideProps() {
  const API_URL = 'http://localhost:5000/graphql';
  const query = gql`
    {
      characters(species: "human") {
        id
        nombre
        species
        url_image
      }
    }
  `;

  try {
    const { characters }: any = await request(API_URL, query); 
    return {
      props: {
        characters,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        characters: [],
      },
    };
  }
}