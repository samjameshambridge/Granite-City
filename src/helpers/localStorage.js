export const loadState = () => {
  try {
    if (!localStorage.getItem("cart")) {
      return {
        cart: {
          inCart: []
        },
        products: {
          currList: "shoes",
          detailProduct: {}
        }
      };
    } else {
      return {
        cart: {
          inCart: JSON.parse(localStorage.getItem("cart"))
        },
        products: {
          currList: "shoes",
          detailProduct: {}
        }
      };
    }
  } catch (err) {
    return;
  }
};

export const saveState = ({ cart: { inCart } }) => {
  try {
    localStorage.setItem("cart", JSON.stringify(inCart));
  } catch {
    console.warning(
      "Granite City cannot keep track of your products. Products may be lost on broswer refresh"
    );
    return;
  }
};
