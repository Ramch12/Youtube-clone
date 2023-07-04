import React, { useState } from "react";

const Search = ({Search_submit}) => {
  const [Search, setSearch] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    Search_submit(Search)
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };



  return (
    <div className="m-2">
      <form action="" onSubmit={handleSubmit}>
        <input
          name="seach"
          type="text"
          className="border-solid border-2 border-black w-full h-16 text-4xl"
          placeholder="Search something"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
