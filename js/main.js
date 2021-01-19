// Google-maps
function initMap() {
    const cloxter = {
        lat: 42.6961579,
        lng: 23.344
    };
    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 15,
            center: cloxter,
            scrollwheel: false,
            draggable: false,

        });
    const icon = 'http://localhost/Cloxter/resources/images/contacts/google-marker-icon.png';

    const marker = new google.maps.Marker({
        position: cloxter,
        map: map,
        title: 'Cloxter',
        icon: icon,

    });



    google.maps.event.addListener(map, 'bounds_changed', onBoundsChanged);

    function onBoundsChanged() {
        if ($(map.getDiv()).children().eq(0).height() == window.innerHeight &&
            $(map.getDiv()).children().eq(0).width() == window.innerWidth) {
            map.scrollwheel = true;
            map.draggable = true;
        } else {
            map.scrollwheel = false;
            map.draggable = false;
            map.setCenter(marker.getPosition());
            map.zoom = 15;
        }
    }
};


// Show-Content
const btn = document.querySelector('.show-all');
const element = document.querySelector('#table-content');
btn.addEventListener('click', showOrHideContent);

function showOrHideContent() {
    if (btn.textContent === "Виж целия списък") {
        element.classList.remove('part-content');
        element.classList.add('all-content');
        btn.textContent = "Скрий";
    } else if (btn.textContent === "Скрий") {
        element.classList.remove('all-content');
        element.classList.add('part-content');
        btn.textContent = "Виж целия списък";
    }
}