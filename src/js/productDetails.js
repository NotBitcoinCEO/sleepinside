export default class ProductDetails{

    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    function addToCart(e) {
        const product = products.find((item) => item.Id === e.target.dataset.id);
        setLocalStorage("so-cart", product);
    }
}