import "./checkout.css";

export default function Checkout() {
  const data = [
    {
      id: 1,
      image: "./assets/laptop.png",
      title: "HP FOLIO 2023",
      description:
        "Ultra slim HP FOLIO, with 8 hrs backup, Keypad light, 8gb RAM, 500 SSD.",
      price: 800,
    },

    {
      id: 2,
      image: "./assets/keyboard.png",
      title: "HP FOLIO 2023",
      description:
        "Ultra slim HP FOLIO, with 8 hrs backup, Keypad light, 8gb RAM, 500 SSD.",
      price: 800,
    },
  ];

  return (
    <div className="checkout">
      <h4>REVIEW ITEMS IN YOUR CART</h4>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt="" />
          <div className="checkoutContainer">
            <div className="checkoutDetails">
              <div className="brandName">
                <h4>{item.title}</h4>
              </div>
              <div className="price">
                <span>${item.price}</span>
              </div>
            </div>
            <div className="description">
              <p>{item.description?.substring(0, 100)}</p>
            </div>

            <div className="quantityContainer">
              <div className="quantity">
                <span className="quant">Qty:</span>
                <span className="remove">-</span>
                <span className="numberItem">1</span>
                <span className="add">+</span>
              </div>
              <div className="soldItemDisplayed">
                <span>32 Sold</span>
              </div>
            </div>
            <button className="removeItem">Remove Item</button>
          </div>
        </div>
      ))}
      <div className="checkoutPayment">
        <div className="subTotal">
          <span>SUBTOTAL</span>
        </div>
        <div className="totalCost">
          <span>$300</span>
        </div>
      </div>
      <button className="proceedToCart">PROCEED TO CART</button>
    </div>
  );
}
