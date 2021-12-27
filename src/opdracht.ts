const productPrices: number[] = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

/**
 * fff
 * @param product ff
 */
function sumAll(product: number[]) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i];
    console.log(total, 'nice ');
  }
  // console.log(product);
}
sumAll(productPrices);
