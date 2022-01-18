var productName = document.getElementById("productName"),
  productPrice = document.getElementById("productPrice"),
  productCategory = document.getElementById("productCategory"),
  productDescription = document.getElementById("ProductDescription");
var allProducts;
var localStorageData = localStorage.getItem("allProducts");
if (localStorageData) {
  allProducts = JSON.parse(localStorageData);
  displayProduct();
} else {
  allProducts = [];
}

function addProduct() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };
  allProducts.push(product);
  setItemsForLocalStorage();
  displayProduct();
  //   clearForm();
}

function displayProduct() {
  var container = ``;
  for (var i = 0; i < allProducts.length; i++) {
    container += `<tr class="d-table-row">
      <td class="py-3">${i + 1}</td>
      <td class="py-3">${allProducts[i].name}</td>
      <td class="py-3">${allProducts[i].price}</td>
      <td class="py-3">${allProducts[i].category}</td>
      <td class="py-3">${allProducts[i].description}</td>
      <td><button class="btn btn-warning" onClick="updateDate(${i})">Update</button></td>
      <td><button class="btn btn-danger" onClick="deleteProduct(${i})">Delete</button></td>
    </tr>`;
  }
  document.getElementById("productData").innerHTML = container;
}
function clearForm() {
  productName.value = ``;
  productPrice.value = "";
  productCategory.value = ``;
  productDescription.value = ``;
}
function deleteProduct(index) {
  allProducts.splice(index, 1);
  setItemsForLocalStorage();
  displayProduct();
}

function setItemsForLocalStorage() {
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
}

function getUpdateProduct(index) {
  productName.value = allProducts[index].name;
  productPrice.value = allProducts[index].price;
  productCategory.value = allProducts[index].category;
  productDescription.value = allProducts[index].description;
}
function updateDate(index) {
  getUpdateProduct(index);
  localStorage.setItem(
    "allProducts",
    JSON.stringify(allProducts.splice(index))
  );
  document.getElementById("mainBtn").innerText = "Update";
}
