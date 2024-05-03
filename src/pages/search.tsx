import { useState } from "react";
import ProductCard from "../components/product-card";
// import {
//   useCategoriesQuery,
//   useSearchProductsQuery,
// } from "../redux/api/productAPI";
// import { CustomError } from "../types/api-types";
// import toast from "react-hot-toast";
// import { Skeleton } from "../components/loader";
// import { CartItem } from "../types/types";
// import { addToCart } from "../redux/reducer/cartReducer";
// import { useDispatch } from "react-redux";

const Search = () => {
  // const {
  //   data: categoriesResponse,
  //   isLoading: loadingCategories,
  //   isError,
  //   error,
  // } = useCategoriesQuery("");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  // const {
  //   isLoading: productLoading,
  //   data: searchedData,
  //   isError: productIsError,
  //   error: productError,
  // } = useSearchProductsQuery({
  //   search,
  //   sort,
  //   category,
  //   page,
  //   price: maxPrice,
  // });

  // const dispatch = useDispatch();

  const addToCartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  // if (isError) {
  //   const err = error as CustomError;
  //   toast.error(err.data.message);
  // }
  // if (productIsError) {
  //   const err = productError as CustomError;
  //   toast.error(err.data.message);
  // }
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
            
              <ProductCard
              // key={i._id}
              productId= "1233Abc"
              name="Accu-Chek Active Glucose Monitor with Free 10 Test Strips"
              price={789}
              stock={10}
              handler={addToCartHandler}
              photo="https://www.netmeds.com/images/product-v1/600x600/15577/accu_chek_active_glucose_monitor_with_free_10_test_strips_0_3.jpg"
            />
          </div>
          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
      </main>

    </div>
  );
};

export default Search;