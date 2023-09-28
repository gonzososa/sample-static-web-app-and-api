const data = require ('../shared/product-data');

module.exports = async function (context, req) {
    try {
        const products = data.getProducts();
        context.res.status(200).send(products);
    } catch (error) {
        context.res.status(500).send(error);
    }
}