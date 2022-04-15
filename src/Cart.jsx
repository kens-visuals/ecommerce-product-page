// components
import Button from './Button';

// assets
import deleteIcon from './images/icon-delete.svg';
import cartImage from './images/image-product-1-thumbnail.jpg';

export default function Cart({ savedCount, setSavedCount }) {
  return (
    <div className="absolute top-[70px] left-1/2 z-10 w-[95%] -translate-x-1/2 rounded-lg  bg-white">
      <span className="block border-b border-solid border-tertiary-dark p-6 font-bold">
        Cart
      </span>
      <div className={`w-full ${!savedCount ? 'py-20' : 'p-6'}`}>
        {!savedCount ? (
          <span className="inline-block w-full text-center font-bold text-tertiary-light">
            Your cart is empty
          </span>
        ) : (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img src={cartImage} alt="shoes" className="w-12 rounded-md" />

              <div className="mr-auto flex flex-col font-bold text-tertiary-dark">
                <span>Fall Limited Edition...</span>
                <span className="font-normal">
                  $125.00 x {savedCount}{' '}
                  <span className="font-bold text-tertiary">
                    ${(125 * savedCount).toFixed(2)}
                  </span>
                </span>
              </div>

              <button type="button" onClick={() => setSavedCount(0)}>
                <img src={deleteIcon} alt="delete" />
              </button>
            </div>

            <Button>
              <span>Checkout</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
