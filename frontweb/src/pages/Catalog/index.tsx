import ProductCard from 'components/ProductCard';
import ButtonIcon from 'components/ButtonIcon';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-12">
          <ButtonIcon />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
