import "./products.css";

export default function Products({item}) {
  return (
    <div className="products">
      <div className="productContainer">
        <img src={item.image}alt="" />
        <div className="productDescription">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>

        <div className="addToChart">
          <h4>${item.price}</h4>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
