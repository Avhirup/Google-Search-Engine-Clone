// console.log("First JS code");
const searchInput = document.getElementById('search-input-bar');

searchInput.addEventListener("keydown", function(event) {
    if(event.code === 'Enter'){
        search();
    }
})

function search(){
    const input = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${input}&rlz=1C1CHBD_enIN1022IN1022&oq=${input}&aqs=chrome..69i57j0i271l3.1016j0j1&sourceid=chrome&ie=UTF-8`;

}