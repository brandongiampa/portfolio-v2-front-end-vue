import bootstrap from "bootstrap/dist/js/bootstrap.js"

function closeNavbarIfOpen() {
    const menuToggle = document.querySelector('#navbarNavAltMarkup.show')
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        bsCollapse.toggle()
    }
}

export default closeNavbarIfOpen