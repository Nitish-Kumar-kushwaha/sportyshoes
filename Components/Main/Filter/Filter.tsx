const Filter = () => {
  return (
    <div className="container mx-4 my-4 d-flex justify-content-evenly flex-column mb-3">
      <div className="mx-4 my-4 d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-lg btn-outline-primary btn-block"
          style={{ width: "" }}
        >
          Sneakers
        </button>
      </div>
      <div className="mx-4 my-4 d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-lg btn-outline-primary"
          style={{ width: "" }}
        >
          Faishon
        </button>
      </div>

      <div className="mx-4 my-4 d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-lg btn-outline-primary"
          style={{ width: "" }}
        >
          sport
        </button>
      </div>

      <div className="mx-4 my-4 d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-lg btn-outline-primary"
          style={{ width: "" }}
        >
          Casual
        </button>
      </div>
    </div>
  );
};

export default Filter;
