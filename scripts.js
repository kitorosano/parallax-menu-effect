const $menu = document.getElementById('menu');
const $menuItem = document.getElementsByClassName('menu-item');

Array.from($menuItem).forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  }
})