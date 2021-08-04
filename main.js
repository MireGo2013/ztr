const langWrapEl = document.querySelector(".lang_menu_wrapper");
const langList = document.querySelector(".drop_down_menu");

const currentLang = langWrapEl.querySelector(".lang_title");
const selectedIconLang = langWrapEl.querySelector(".icon_lang_wrapper img");

langWrapEl.addEventListener("click", function (e) {
  if (langList.contains(e.target) && e.target.classList.contains("item_list")) {
    selectedIconLang.src = e.target.querySelector("img").src;
    let selectedLang = (currentLang.dataset.lang =
      e.target.querySelector(".lang_title").innerHTML);
    currentLang.innerHTML = selectedLang;
    changeLang(selectedLang);
    this.classList.remove("active");
  }
  if (e.target.classList.contains("selected_lang_wrapper")) {
    this.classList.toggle("active");
  }
});

function changeLang(lang) {
  for (let key in langArr) {
    if (document.querySelector(`.${key}`)) {
      document.querySelector(`.${key}`).innerHTML = langArr[key][lang];
    }
  }
}
