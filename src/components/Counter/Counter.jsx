import { useState } from 'react';

const Counter = () => {
  const [total, setTotal] = useState(0);

  const handleClickIncrement = () => setTotal((prevTotal) => prevTotal + 1);

  const handleClickIDecrement = () => setTotal((prevTotal) => (prevTotal > 0 ? prevTotal - 1 : prevTotal));

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card bg-dark text-white " style={{ width: '600px' }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: '80px' }}>
            {total}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button className="btn btn-outline-success me-5" onClick={handleClickIncrement}>
              <i className="bi bi-plus-circle fs-1"></i>
            </button>
            <button className="btn  btn-outline-danger ms-5" onClick={handleClickIDecrement}>
              <i className="bi bi-dash-circle fs-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
