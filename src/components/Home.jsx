import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {

    return (
        <>

            <Helmet>
                <title> Home</title>
                <meta name='description' content='This is my Home page' />
            </Helmet>

            <h1>Home</h1>
            <hr />
            <p>
                This is my Home Page 
                ====================
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fugiat libero sapiente ex quae laboriosam
                blanditiis mollitia iure sit, omnis nam iste fa
                cilis minus molestias, aut ullam minima aliquid f
                acere unde!
            </p>
            <p>
                Simple Links: <Link to='/'> Home</Link>,
                <Link to='/about'> About</Link>,
                <Link to='/contact'>Contact</Link>
            </p>
        </>
    );
}


