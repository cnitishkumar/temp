import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getOrderTotal = () => {
        let totalAmount = 0

        cartList.forEach(each => {
          totalAmount += each.price * each.quantity
        })

        return totalAmount
      }

      return (
        <div className="cart-summary-container">
          <div>
            <div>
              <h2 className="order-total-heading">
                Order Total :{' '}
                <span className="order-value">{getOrderTotal()}/-</span>
              </h2>
              <p className="items-count">{cartList.length} Items in cart</p>
            </div>
            <div className="btn-container">
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
