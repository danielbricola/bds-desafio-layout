import './styles.css';

const ButtonIcon = () => {
  return (
    <div className="btn-container base-card">
        <div className="search-container">
          <input type="search" placeholder="Digite sua busca" />
        </div>
        <button className="btn btn-secondary">BUSCAR</button>
    </div>
  );
};

export default ButtonIcon;
