class ShopItemsArray extends Array {
  async addItem(name, price, quantity) {
    let index = await this.getIndex(name);

    if (index != -1) {
      this[index].quantity += quantity;
    }
    else {
      let newItem = {};
      newItem.name = name;
      newItem.price = price;
      newItem.quantity = quantity;

      this.push(newItem)
    }
  }

  async removeItem(index) {
    this.splice(index, 1);
  }

  async getIndex(name) {
    return this.findIndex(obj => obj.name === name);
  }

  async sortByName() {
    this.sort((a, b) => a.name.localeCompare(b.name));
  }

  async equals(arrayToCompare) {
    return this.toSortedString() == arrayToCompare.toSortedString();
  }

  async toSortedString() {
    this.sortByName();
    return JSON.stringify(this);
  }
}

module.exports = ShopItemsArray;