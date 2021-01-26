import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
    return (
        <div>
            <Head>
                <meta property="og:image" content={db.bg} /> 
            </Head>
        </div>
    )
}

export default IndexPage