
let defaultCity = "张家口"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}

export default {
    city: defaultCity
}