import './styles.css';

import ProductImg from 'assets/images/product.png';
import ProductDescription from 'components/ProductDescription';

const ProductCard = () => {
    return(
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductImg} alt="Nome do Produto" />
            </div>
            <div className="card-bottom-container">
                <ProductDescription />
            </div>
        </div>
    );
}

export default ProductCard;