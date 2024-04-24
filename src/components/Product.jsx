import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Product() {
	const { pid } = useParams();
	return (
		<>
			<Helmet>
				<title>Product {pid}</title>
				<meta name='description' content={`This is product ${pid} page`} />
			</Helmet>
			<h1>Product {pid}</h1>
			<hr />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
				velit sit? Quis, quos? Vel perferendis odio molestias placeat delectus
				adipisci, earum facere deleniti laborum maxime laboriosam eaque, velit
				sapiente nihil.
			</p>
			<p>
				<Link to='/products'>Back</Link>
			</p>
		</>
	);
}

export default Product;