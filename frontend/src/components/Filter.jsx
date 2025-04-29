function Filter({ pokiTypes, filter, setFilter }) {
  return (
    <select className="form-select mb-4" aria-label="Default select example" value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value={""}>Filter</option>
      {
        Object.keys(pokiTypes).map((type, index) => (
          <option value={type} key={index}>{type}</option>
        ))
      }
    </select>
  );
}

export default Filter;  