function showCategory(category) {
  const list0 = document.querySelector(".list0");
  list0.classList.add("hidden");
  //   let categoryObject = {
  //     item1: {
  //         list:"list1",
  //         state: false,
  //     },
  //     item2:{
  //         list:"list2",
  //         state: false,
  //     },
  //     item3: {
  //         list:"list3",
  //         state: false,
  //     },
  //     item4: {
  //         list:"list4",
  //         state: false,
  //     },
  //   };
  //   const item = document.querySelector(`.${category}`);
  //   categoryObject[category].state = true;
  //   console.log(categoryObject);
  //   const list = document.querySelector(`.${categoryObject[category].list}`);
  //   list.classList.remove("hidden");
  //   list.classList.add("block");
  //   console.log(list);
  //   item.classList.add("text-2xl");

  const categories = document.querySelectorAll(".list");
  categories.forEach((cat) => (cat.style.display = "none"));
  
  console.log(document.getElementById(category));
    document.getElementById(category).style.display = "block";
}
const title = document.querySelector(".title");
console.log(title);
console.log(title.innerText);
