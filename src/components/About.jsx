import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default function About() {

    return (
        <>
            <Helmet>
                <title> About</title>
                <meta name='description' content='This is my About page' />
            </Helmet>
            <h1>About</h1>
            <hr />
            <p>
            This is my About Page 
                ====================
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Fugiat libero sapiente ex quae laboriosam
                blanditiis mollitia iure sit, omnis nam iste
                facilis minus molestias, aut ullam minima
                aliquid facere unde!
            </p>
            <p>
                Simple Links: <Link to='/'> Home</Link>,
                <Link to='/about'> About</Link>,
                <Link to='/contact'>Contact</Link>
            </p>
        </>
    );
}

