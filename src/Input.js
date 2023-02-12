import "./input.scss";
const Input = ({ handleSubmit, city, handleSearch }) => {
  return (
    <>
      <div className="d-flex  mt-4">
        <div className="mt-4">
          <form onSubmit={handleSubmit} className="inputHead">
            <input
              type="text"
              value={city}
              className="inpSec"
              // onChange={(event) => setCity(event.target.value)}
              onChange={handleSearch}
              placeholder="Enter a city"
              required
            />
            <button className="cursor-pointer">Search</button>
          </form>
        </div>
      </div>

      {/* <div className="input-group">
        <form onSubmit={handleSubmit}>
          <input
            value={city}
            type="search"
            className="form-control rounded"
            placeholder="Enter a city"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
        </form>
      </div> */}
    </>
  );
};

export default Input;
