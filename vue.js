'use strict';
const app = new Vue({
    el: '#app',
    data: {
        numberOfColumns: 2,
     headings: [
        {name: "Portfolio", link: 'index.html'},
        {name: "About Me", link: 'aboutme.html'},
        {name: "Resume", link: 'resume.html'}

     ],
     projects: [
         {
            name: 'Proj1',
            description: 'hello world1',
            images: ['img1 1 ', 'img2 1', 'img3 1']
         },
         {
            name: 'Proj2',
            description: 'hello world2',
            images: ['img1 2', 'img2 2', 'img3 2']
         },
         {
            name: 'Proj3',
            description: 'hello world3',
            images: ['img1 3', 'img2 3', 'img3 3']
         },
         {
            name: 'Proj4',
            description: 'hello world4',
            images: ['img1 4 ', 'img2 4', 'img3 4']
         },
         {
            name: 'Proj5',
            description: 'hello world5',
            images: ['img1 5', 'img2 5', 'img3 5']
         },
         {
            name: 'Proj6',
            description: 'hello world6',
            images: ['img1 6', 'img2 6', 'img3 6']
         }

     ]
    },
    computed: {
        gridStyle(){
            return {gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`}
        }
    },
    methods: {

     

    } // end methods
});