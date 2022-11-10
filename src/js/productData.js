function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Bad Response');
    }
  }


  export default class ProductData  {
    constructor(category) {
      this.category = category;
      this.path = `../json/${this.category}.json`;
    }
    getData() {
      return fetch(this.path)
        .then(convertToJson).then((data) => data);
    }
    async findProductById(id) {
      const products = await this.getData()
      return products.find((item) => item.Id === id);
    }
  }

// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }

// export default class ProductData  {
//     constructor(category) {
//         this.category = category;
//         this.path = `../json/${this.category}.json`;
//     }
//     getData() {
//         fetch(this.path)
//         .then(convertToJson)
//         .then((data) => {
//           products = data;
//         });
//     }
//     findProductById(id) {
//         products = this.getData 
//         products.find((item) => item.Id === e.target.dataset.id);
//         setLocalStorage("so-cart", product);
//     }
    
//   }