export default {
    fetchProjects: () => new Promise((resolve, reject) => resolve(
        [
            {
                id: "Postprocessing",
                name: "Postprocessing",
                labels: ["Three.js", "GLSL"],
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This project is built with Three.js and GLSL. This hand-drawing effect is created by multiple shaders. One shader is for edge detection and the other one uses noise function for such sense of randomness.",
                links: [{url:"https://github.com/ShengyaoXiao/postprocessing", name:"Open Project", icon: "fab fa-github"}],
                secondaryLinks: [], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fpostprocessing.gif?alt=media&token=0291b8ff-babc-4d40-9392-37d992a57961",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FpostprocessingSmall.gif?alt=media&token=4eae330c-1013-47e7-8ab9-799cc3351e84",
                highlight: true
            },
            {
                id: "Serendipity",
                name: "Serendipity",
                labels: ["Three.js", "GLSL"],
                subtitle: "Playing around with shaders and post-processing effects",
                description: "This project is built with Three.js and GLSL. The random shape of the mesh is done by a vertex shader that changes the vertex displacement randomly. Its glowing post-effect is created by a bloom shader. I named this project 'Serendipity' as it looks like a magic treasure.",
                links: [{url:"https://github.com/ShengyaoXiao/glsl/tree/master/experiment%235", name:"Open Project",icon: "fab fa-github"}],
                secondaryLinks: [],
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FserendipitySmall.gif?alt=media&token=a5628291-cd31-4ae6-9cd2-433b43722d5d",
                img:  "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fserendipity.jpg?alt=media&token=3711fd88-3c4a-47c0-99a9-db2317fc5f55",
                highlight: true
            },
            {
                id: "ShinyMoon",
                name: "Shiny Moon",
                labels: ["Three.js", "GLSL"],
                subtitle: "An expriment with bloom shader.",
                description: "Shiny moon is inspired by a moon night-lights. I wrote a short blog about how to render post effects using Three.js. Check the link below if you are interested. ",
                links: [{url:"https://zhuanlan.zhihu.com/p/38612359", name: "Read the blog",icon: "fas fa-external-link-alt"}],
                secondaryLinks: [{url: "https://codepen.io/higashino/pen/xzQwoe", name: "Play live", icon: "fab fa-codepen"}],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FmoonAfter.png?alt=media&token=60c2e0bf-d76d-44f3-b5e9-c59d57ed50dc",
                highlight: false
            },
            {
                id: "Lava",
                name: "Lava",
                labels:["GLSL"],
                subtitle: "An experiment learning GLSL, noise function and random function.",
                description: "",
                links: [],
                secondaryLinks: [],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Flava.gif?alt=media&token=ff8e275e-e28f-439e-86be-10b12c67c0fd", 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Flava.gif?alt=media&token=f1bc2222-8e49-46a9-935a-28d2bfadb588",
                highlight: false
            },
            {
                id: "Grasswithnoise",
                name: "Grass with Noise",
                labels:["GLSL"],
                subtitle: "An experiment learning GLSL, noise function and random function.",
                description: "2D noise function creates this water wave/wind motion.",
                links: [],
                secondaryLinks: [],
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fgrass.gif?alt=media&token=4dd84e3e-5f04-4ea2-99d3-30fd1954ba9f", 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FgrassSmall.gif?alt=media&token=cc92ec1c-db25-451f-8516-c8f7a3274825",
                highlight: false
            },
            {
                id: "Earthinsmoke",
                name: "Earth in Smoke",
                labels:["Three.js", "GLSL"],
                subtitle: "An experiment with shaders.",
                description: "This smoke visual is created by changing the coordinates of the texture, and sampling the texture twice.",
                links: [],
                secondaryLinks:[], 
                img: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fearth.gif?alt=media&token=c61ad868-15d3-4e40-8a62-ea73975f8085", 
                imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2FearthSmall.gif?alt=media&token=7df3602e-a326-41c8-9ad4-735004e0571a",
                highlight: false
            },
            // {
            //     id: "Sakura",
            //     name: "Sakura",
            //     labels:["GLSL"],
            //     subtitle: "An experiment learning GLSL, noise function and random function.",
            //     description: "First shader that I created! Yeaah!",
            //     linkss: [],
            //     secondaryLinks: [],
            //     img: null,
            //     imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/projects%2Fsakura.png?alt=media&token=539550f6-3ef9-405c-9076-0b4f1df33d71",
            //     highlight: false
            // }
        ]
    ))
}