import {items} from '../../dummy';
import Products from "../products/Products";
import './product.css';

export default function Product() {
  return (
    <div className="product">
        {items.map (item => (
            <Products key = {item.id} item = {item}/>
        ))};
        
    </div>
  );
};
