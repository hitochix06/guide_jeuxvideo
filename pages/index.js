import Select from 'react-select'
import styles from '../styles/page.module.scss'
import Card from 'react-animated-3d-card'
import { useState, useEffect } from 'react'

export default function Home() {
  //code permet de récupérer les jeux aléatoirement
  const [games, setGames] = useState([]);

  const loadRandomGames = async (nb) => {
    const response = await fetch(`/api/igdb/randomgames?nb=${nb}`);
    const data = await response.json();
    setGames(data);
    console.log(data);
  }

  useEffect(() => {
    loadRandomGames(8);
  }, []);

  const convertImage = (url, size) => {
    const result = url.replace(/thumb/g, size);
    return result;
  }
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]


  return (
    <main className={styles.background}>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          </div>
          <div className="col-7 mt-5">
            <div className="card ">
              <div classn="card-body">
                <h1 className={styles.titre}>Et si vous découvriez un nouveau jeux ?</h1>
              </div>
            </div>
          </div>
          <div className="col">
          </div>
          {/* <Select instanceId='rand' options={options} className='mt-5' /> */}
        </div>

        <div className="row mt-5 ">
          {games.map((game, i) => (
            <div className="col-3" key={i}>
              <Card
                style={{
                  backgroundColor: 'blue',
                  width: '200px',
                  height: '200px',
                  cursor: 'pointer',
                }}
                onClick={() => console.log('clicked')}
              >
                <img src={convertImage(game.cover.url, "720p")} alt={game.name} style={{ width: '100%', height: 'auto', maxHeight: '300px' }} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
