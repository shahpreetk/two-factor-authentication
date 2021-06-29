import { useState } from "react";

// @ts-check
const Sorting = () => {
  const [numbers, setNumbers] = useState([]);
  const [sorted, setSorted] = useState([]);

  const handleInput = (e) => {
    setNumbers(e.target.value);
  };

  const sortNumbers = (e) => {
    e.preventDefault();
    const numberArray = numbers.split`,`.map((arr) => +arr);
    const newArray = numberArray.sort((a, b) => a - b);
    setSorted(newArray);
    e.target.reset();
    setNumbers("");
  };
  return (
    <>
      <div className="m-3 p-3">
        <div className="py-12 bg-lime-200 rounded">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-3 font-mono font-bold text-2xl text-lime-700">
              Sorting: Sort a list of numbers
            </h2>
            <form onSubmit={sortNumbers}>
              {/* <form onSubmit={() => handleInput()}> */}
              <div>
                <label
                  htmlFor="numbers"
                  className="block text-md font-medium text-gray-700"
                >
                  List of numbers, separated by a comma
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="numbers"
                    id="numbers"
                    className="block w-full h-12 pl-2 pr-8 sm:text-md border-lime-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    placeholder="3, 4, 1 . . ."
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="mt-3 sm:mt-1">
                  <button className="w-30 mt-2 flex items-center justify-center px-6 py-3 border border-none text-base font-medium rounded-md text-emerald-200 bg-emerald-800 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">
                    Sort
                  </button>
                </div>

                {sorted.length !== 0 && (
                  <div>
                    <h1 className="text-2xl font-mono mt-5 sm:mt-4">
                      Your sorted list is: {sorted.toString()}
                    </h1>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
