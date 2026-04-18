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

function loadScene(scene) {
    viewer.loadScene(scene);
    document.getElementById('mapOverlay').style.display = 'none'; // Hide map after selection
}

document.getElementById('toggleMap').addEventListener('click', function() {
    var map = document.getElementById('mapOverlay');
    map.style.display = map.style.display === 'none' ? 'block' : 'none';
});