interface CartProps {
  cartItems: { id: number; name: string; price: number }[];
  onAddItem: () => void;
  onClearCart: () => void;
}

const Cart = ({ cartItems, onAddItem, onClearCart }: CartProps) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={onAddItem}>Add Item</button>
      <button onClick={onClearCart}>Clear Cart</button>
    </>
  );
};

export default Cart;
