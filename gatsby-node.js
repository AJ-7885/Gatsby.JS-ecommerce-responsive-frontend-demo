/**
 * Implement Gatsby's Node APIs in this file.
 */

 const axios = require('axios');
 const crypto = require('crypto');

// exports.sourceNodes = async ({ boundActionCreators }) => {
exports.sourceNodes = ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;
  return new Promise((resolve, reject) => {

    // fetch raw data from the api
    // const fetchProducts = () => axios.get(`https://raw.githubusercontent.com/Flaconi/coding-challenges/master/senior-frontend-engineer/resources/productlist.json`);

    // await for results
    // const res = await fetchProducts();

    axios.get(`https://raw.githubusercontent.com/Flaconi/coding-challenges/master/senior-frontend-engineer/resources/productlist.json`)
    .then(res => {
      // map into these results and create nodes
      res.data.map((product, i) => {

        // Create your node object
        const productNode = {
          // Required fields
          id: product.id,
          parent: `__SOURCE__`,
          internal: {
            type: `products`,
            // name of the graphQL query --> allproducts {}
            // contentDigest will be added just after, but it is required
          },
          children: [],

          // Other fields that you want to query with graphQl
          name: product.name,
          slug: product.slug,
          brand: product.brand,
          type: product.type,
          image: product.image,
          price: product.price,
          size: product.size,
          rating: product.rating,
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(productNode)).digest(`hex`);
        // add it to productNode
        productNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(productNode);
      });
      resolve();
    });

  });

}
