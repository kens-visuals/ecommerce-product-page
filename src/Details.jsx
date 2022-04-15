// assets
import plusIcon from './images/icon-plus.svg';
import minusIcon from './images/icon-minus.svg';

export function Details({ setCount, count, setSavedCount }) {
  const deductCount = () =>
    setCount((prevCount) => (count === 0 ? 0 : prevCount - 1));

  const addCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="px-6 py-4">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary">
        sneaker company
      </span>
      <h1 className="mb-4 text-3xl font-bold text-tertiary">
        Fall Limited Edition Sneakers
      </h1>

      <p className="mb-6 text-tertiary-light">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="rounded-md bg-secondary px-2 font-bold text-primary">
            50%
          </span>
        </div>
        <span className="font-bold text-tertiary-dark">
          <s>$250.00</s>
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex w-full items-center justify-between rounded-lg bg-secondary-dark p-4 px-6">
          <button type="button" onClick={deductCount}>
            <img src={minusIcon} alt="minus" />
          </button>

          <span className="font-bold">{count}</span>

          <button type="button" onClick={addCount}>
            <img src={plusIcon} alt="plus" />
          </button>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary p-4 font-bold text-white"
          onClick={() => setSavedCount(count)}
        >
          <svg
            width="21"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-75 fill-white"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill-rule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
