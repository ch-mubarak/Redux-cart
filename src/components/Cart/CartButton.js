import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCount=useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
