var viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: 'afthelm',
        author: 'Explore Titanic: 3D Tour',
        sceneFadeDuration: 1000
    },
    scenes: {
        afthelm: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/afthelm_f.jpg',
                './images/visualFiles/afthelm_r.jpg',
                './images/visualFiles/afthelm_b.jpg',
                './images/visualFiles/afthelm_l.jpg',
                './images/visualFiles/afthelm_u.jpg',
                './images/visualFiles/afthelm_d.jpg'
            ]
        },
        base: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/base_f.jpg',
                './images/visualFiles/base_r.jpg',
                './images/visualFiles/base_b.jpg',
                './images/visualFiles/base_l.jpg',
                './images/visualFiles/base_u.jpg',
                './images/visualFiles/base_d.jpg'
            ]
        },
        base2: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/base2_f.jpg',
                './images/visualFiles/base2_r.jpg',
                './images/visualFiles/base2_b.jpg',
                './images/visualFiles/base2_l.jpg',
                './images/visualFiles/base2_u.jpg',
                './images/visualFiles/base2_d.jpg'
            ]
        },
        boiler: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/boiler_f.jpg',
                './images/visualFiles/boiler_r.jpg',
                './images/visualFiles/boiler_b.jpg',
                './images/visualFiles/boiler_l.jpg',
                './images/visualFiles/boiler_u.jpg',
                './images/visualFiles/boiler_d.jpg'
            ]
        },
        bridge_throttle: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/bridge_throttle_f.jpg',
                './images/visualFiles/bridge_throttle_r.jpg',
                './images/visualFiles/bridge_throttle_b.jpg',
                './images/visualFiles/bridge_throttle_l.jpg',
                './images/visualFiles/bridge_throttle_u.jpg',
                './images/visualFiles/bridge_throttle_d.jpg'
            ]
        },
        deck1: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/deck1_f.jpg',
                './images/visualFiles/deck1_r.jpg',
                './images/visualFiles/deck1_b.jpg',
                './images/visualFiles/deck1_l.jpg',
                './images/visualFiles/deck1_u.jpg',
                './images/visualFiles/deck1_d.jpg'
            ]
        },
        deck2: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/deck2_f.jpg',
                './images/visualFiles/deck2_r.jpg',
                './images/visualFiles/deck2_b.jpg',
                './images/visualFiles/deck2_l.jpg',
                './images/visualFiles/deck2_u.jpg',
                './images/visualFiles/deck2_d.jpg'
            ]
        },
        deck3: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/deck3_f.jpg',
                './images/visualFiles/deck3_r.jpg',
                './images/visualFiles/deck3_b.jpg',
                './images/visualFiles/deck3_l.jpg',
                './images/visualFiles/deck3_u.jpg',
                './images/visualFiles/deck3_d.jpg'
            ]
        },
        dining: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/dining_f.jpg',
                './images/visualFiles/dining_r.jpg',
                './images/visualFiles/dining_b.jpg',
                './images/visualFiles/dining_l.jpg',
                './images/visualFiles/dining_u.jpg',
                './images/visualFiles/dining_d.jpg'
            ]
        },
        forwardhelm: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/forwardhelm_f.jpg',
                './images/visualFiles/forwardhelm_r.jpg',
                './images/visualFiles/forwardhelm_b.jpg',
                './images/visualFiles/forwardhelm_l.jpg',
                './images/visualFiles/forwardhelm_u.jpg',
                './images/visualFiles/forwardhelm_d.jpg'
            ]
        },
        lower_left_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/lower_left_cube_f.jpg',
                './images/visualFiles/lower_left_cube_r.jpg',
                './images/visualFiles/lower_left_cube_b.jpg',
                './images/visualFiles/lower_left_cube_l.jpg',
                './images/visualFiles/lower_left_cube_u.jpg',
                './images/visualFiles/lower_left_cube_d.jpg'
            ]
        },
        lower_right_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/lower_right_cube_f.jpg',
                './images/visualFiles/lower_right_cube_r.jpg',
                './images/visualFiles/lower_right_cube_b.jpg',
                './images/visualFiles/lower_right_cube_l.jpg',
                './images/visualFiles/lower_right_cube_u.jpg',
                './images/visualFiles/lower_right_cube_d.jpg'
            ]
        },
        stairs_midlevel: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/stairs_midlevel_cube_f.jpg',
                './images/visualFiles/stairs_midlevel_cube_r.jpg',
                './images/visualFiles/stairs_midlevel_cube_b.jpg',
                './images/visualFiles/stairs_midlevel_cube_l.jpg',
                './images/visualFiles/stairs_midlevel_cube_u.jpg',
                './images/visualFiles/stairs_midlevel_cube_d.jpg'
            ]
        },
        Swimming_pool_view1_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Swimming_pool_view1_cube_f.jpg',
                './images/visualFiles/Swimming_pool_view1_cube_r.jpg',
                './images/visualFiles/Swimming_pool_view1_cube_b.jpg',
                './images/visualFiles/Swimming_pool_view1_cube_l.jpg',
                './images/visualFiles/Swimming_pool_view1_cube_u.jpg',
                './images/visualFiles/Swimming_pool_view1_cube_d.jpg'
            ]
        },
        Swimming_pool_view2: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Swimming_pool_view2_f.jpg',
                './images/visualFiles/Swimming_pool_view2_r.jpg',
                './images/visualFiles/Swimming_pool_view2_b.jpg',
                './images/visualFiles/Swimming_pool_view2_l.jpg',
                './images/visualFiles/Swimming_pool_view2_u.jpg',
                './images/visualFiles/Swimming_pool_view2_d.jpg'
            ]
        },
        Topdeck_view1: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Topdeck_view1_f.jpg',
                './images/visualFiles/Topdeck_view1_r.jpg',
                './images/visualFiles/Topdeck_view1_b.jpg',
                './images/visualFiles/Topdeck_view1_l.jpg',
                './images/visualFiles/Topdeck_view1_u.jpg',
                './images/visualFiles/Topdeck_view1_d.jpg'
            ]
        },
        Topdeck_view2: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Topdeck_view2_f.jpg',
                './images/visualFiles/Topdeck_view2_r.jpg',
                './images/visualFiles/Topdeck_view2_b.jpg',
                './images/visualFiles/Topdeck_view2_l.jpg',
                './images/visualFiles/Topdeck_view2_u.jpg',
                './images/visualFiles/Topdeck_view2_d.jpg'
            ]
        },
        Topdeck_view3: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Topdeck_view3_f.jpg',
                './images/visualFiles/Topdeck_view3_r.jpg',
                './images/visualFiles/Topdeck_view3_b.jpg',
                './images/visualFiles/Topdeck_view3_l.jpg',
                './images/visualFiles/Topdeck_view3_u.jpg',
                './images/visualFiles/Topdeck_view3_d.jpg'
            ]
        },
        Topdeck_view4: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/Topdeck_view4_f.jpg',
                './images/visualFiles/Topdeck_view4_r.jpg',
                './images/visualFiles/Topdeck_view4_b.jpg',
                './images/visualFiles/Topdeck_view4_l.jpg',
                './images/visualFiles/Topdeck_view4_u.jpg',
                './images/visualFiles/Topdeck_view4_d.jpg'
            ]
        },
        topstair_center_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/topstair_center_cube_f.jpg',
                './images/visualFiles/topstair_center_cube_r.jpg',
                './images/visualFiles/topstair_center_cube_b.jpg',
                './images/visualFiles/topstair_center_cube_l.jpg',
                './images/visualFiles/topstair_center_cube_u.jpg',
                './images/visualFiles/topstair_center_cube_d.jpg'
            ]
        },
        topstair_left_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/topstair_left_cube_f.jpg',
                './images/visualFiles/topstair_left_cube_r.jpg',
                './images/visualFiles/topstair_left_cube_b.jpg',
                './images/visualFiles/topstair_left_cube_l.jpg',
                './images/visualFiles/topstair_left_cube_u.jpg',
                './images/visualFiles/topstair_left_cube_d.jpg'
            ]
        },
        topstairright_cube: {
            type: 'cubemap',
            cubeMap: [
                './images/visualFiles/topstairright_cube_f.jpg',
                './images/visualFiles/topstairright_cube_r.jpg',
                './images/visualFiles/topstairright_cube_b.jpg',
                './images/visualFiles/topstairright_cube_l.jpg',
                './images/visualFiles/topstairright_cube_u.jpg',
                './images/visualFiles/topstairright_cube_d.jpg'
            ]
        }
    }
});

function positionMapPoints() {
    var image = document.getElementById('mapImage');
    var overlay = document.getElementById('mapOverlay');
    if (!image.naturalWidth || !image.naturalHeight) {
        return;
    }

    var maxWidth = image.naturalWidth * 1.75;
    overlay.style.setProperty('--map-max-width', maxWidth + 'px');

    var scale = image.clientWidth / image.naturalWidth;
    var pointSize = Math.round(24 * Math.max(0.75, Math.min(scale, 1.75)));
    overlay.style.setProperty('--map-point-size', pointSize + 'px');

    var points = document.querySelectorAll('.mapPoint');
    points.forEach(function(point) {
        var rawLeft = point.dataset.x || point.style.left;
        var rawTop = point.dataset.y || point.style.top;
        var px = parseFloat(rawLeft);
        var py = parseFloat(rawTop);
        if (!isNaN(px) && !isNaN(py)) {
            var iconWidth = pointSize;
            var iconHeight = pointSize;
            var offsetX = iconWidth;
            var offsetY = iconHeight * 1.5;

            point.style.left = ((px + offsetX) / image.naturalWidth * 100) + '%';
            point.style.top = ((py + offsetY) / image.naturalHeight * 100) + '%';
        }
    });
}

var mapImage = document.getElementById('mapImage');
var mapOverlay = document.getElementById('mapOverlay');
var toggleMapButton = document.getElementById('toggleMap');

if (mapImage.complete) {
    positionMapPoints();
} else {
    mapImage.addEventListener('load', positionMapPoints);
}
window.addEventListener('resize', positionMapPoints);

function isMapOpen() {
    return mapOverlay.style.display === 'block';
}

function openMap() {
    mapOverlay.style.display = 'block';
}

function closeMap() {
    mapOverlay.style.display = 'none';
}

function loadScene(scene) {
    viewer.loadScene(scene);
    closeMap();
}

toggleMapButton.addEventListener('click', function() {
    if (isMapOpen()) {
        closeMap();
        return;
    }

    openMap();
});

document.addEventListener('pointerdown', function(event) {
    if (!isMapOpen()) {
        return;
    }

    if (mapOverlay.contains(event.target) || toggleMapButton.contains(event.target)) {
        return;
    }

    closeMap();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isMapOpen()) {
        closeMap();
    }
});

document.getElementById('infoButton').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'block';
});

document.getElementById('infoModalClose').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('infoModal')) {
        document.getElementById('infoModal').style.display = 'none';
    }
});

document.getElementById('hiddenScenesSelect').addEventListener('change', function() {
    var scene = this.value;
    if (scene) {
        loadScene(scene);
        document.getElementById('mapOverlay').style.display = 'none';
        this.value = ''; // reset
    }
});
