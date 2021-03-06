export const filterFunction = (products, filter) => {
  let mutatedProductList = JSON.parse(JSON.stringify(products));

  if (filter.sort === "LOW_TO_HIGH") {
    mutatedProductList.sort((a, b) => a.price - b.price);
  }
  if (filter.sort === "HIGH_TO_LOW") {
    mutatedProductList.sort((b, a) => a.price - b.price);
  }
  if (filter.PriceRange !== null) {
    mutatedProductList = mutatedProductList.filter(
      (ele) => ele.price <= filter.PriceRange
    );
  }
  if (filter.productsTags.length > 0) {
    mutatedProductList = mutatedProductList.filter((ele) =>
      filter.productsTags.includes(ele.tag)
    );
  }

  if (filter.Sizes.length > 0) {
    mutatedProductList = mutatedProductList.filter((ele) =>
      ele.size.some((siz) => filter.Sizes.includes(siz))
    );
    // console.log(newPro);
  }
  if (filter.ideal.length > 0 && filter.ideal.length <= 1) {
    mutatedProductList = mutatedProductList.filter((ele) =>
      ele.idealFor.every((ide) => filter.ideal.includes(ide))
    );
    // console.log(newPro);
  } else if (filter.ideal.length > 1) {
    mutatedProductList = mutatedProductList.filter(
      (ele) => ele.idealFor.includes("men") && ele.idealFor.includes("women")
    );
  }

  return mutatedProductList;
};
