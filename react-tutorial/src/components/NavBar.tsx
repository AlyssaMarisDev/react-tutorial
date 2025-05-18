interface NavBarProps {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: NavBarProps) => {
  return (
    <div>
      <span>NavBar: {cartItemsCount}</span>
    </div>
  );
};

export default NavBar;
