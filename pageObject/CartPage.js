var BasePage = require("./BasePage"); 

class CartPage extends BasePage {
    ItemInCart = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.ObjectListItem"
        }
    };

    editCartBtn =  {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.ui.core.Icon",
            "id": "*editButton-img"
        }
    };

    deleteItemFromCartBtn = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.ui.core.Icon"
        }
    };

    confirmDeleteBtn = {
        "elementProperties": {
            "metadata": "sap.m.Button",
            "text": "Delete"
        }
    };

    async editCart() {
        await ui5.userInteraction.click(this.editCartBtn);
    }

    async deleteItemFromCart(index) {
        await ui5.userInteraction.click(this.deleteItemFromCartBtn, index);
    }

    async confirmDelete() {
        await ui5.userInteraction.click(this.confirmDeleteBtn);
    }

    async getCartItemName(index) {
        const elem = await ui5.element.getDisplayed(this.ItemInCart, index);
        return await ui5.control.getProperty(elem, "title");
    }

    async getCartItemQuantity(index) {
        const elem = await ui5.element.getDisplayed(this.ItemInCart, index);
        let cartQuantity = await ui5.control.getProperty(elem, "intro");
        cartQuantity = cartQuantity.slice(0, -2);
        return Number(cartQuantity);
    }

    async getCartItemPrice(index) {
        const elem = await ui5.element.getDisplayed(this.ItemInCart, index);
        return await ui5.control.getProperty(elem, "number");
    }

    async getCartItemsArray() {
        console.log(await ui5.element.getDisplayed(this.ItemInCart));
        return await ui5.element.getAllDisplayed(this.ItemInCart);
    }
};

module.exports = new CartPage();