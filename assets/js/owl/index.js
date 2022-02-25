const menuList = document.getElementById("menu-list")
menuList.className = "hidden-list"



function showMenu() {
    if(menuList.className === "hidden-list") {
        menuList.className = "nav-list"
    } else {
        menuList.className = "hidden-list"
    }
}
