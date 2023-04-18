const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll(".item");
const categoriesLength = categoriesItems.length;
console.log("Number of categories: " + categoriesLength);

for (let i = 0; i < categoriesLength; i++) {
  const categoryItem = categoriesItems[i];
  const categoryHeader = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li");
  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${categoryElements.length}`);
}
