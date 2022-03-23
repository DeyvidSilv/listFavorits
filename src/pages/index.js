import Head from 'next/head';
import styles from './home.module.scss';
import data from '../util/data.json';

export default function Home() {
  return (
    <>
        <Head>
            <title>Listagem</title>
        </Head>
     
        <main>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Favorito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.list.listOptions.map( option => (
                                <tr key={option.name}>
                                    <td>
                                        <span>
                                            {option.name}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.toggle}>
                                            <input type="checkbox" id={option.id} />
                                            <label htmlFor={option.id}></label>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </main>
    </>
  )
}
