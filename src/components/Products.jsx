import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Products() {
	return (
		<>
			<Helmet>
				<title>Products</title>
				<meta name='description' content='This is products page' />
			</Helmet>
			<h1>Products</h1>
			<hr />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
				velit sit? Quis, quos? Vel perferendis odio molestias placeat delectus
				adipisci, earum facere deleniti laborum maxime laboriosam eaque, velit
				sapiente nihil.
			</p>
			<p>
				<ul>
					<li>
						<Link to='/product/1'>Product 1</Link>
					</li>
					<li>
						<Link to='/product/2'>Product 2</Link>
					</li>
					<li>
						<Link to='/product/3'>Product 3</Link>
					</li>
				</ul>
			</p>
		</>
	);
}

export default Products;