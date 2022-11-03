import Fuse from "fuse.js";

//const data_socie: readonly any[] = [];
//let fuse = new Fuse(data_socie);

fetch('http://localhost:5000/socies-name').then(
    resp => {
        resp.json().then(
            data => {
                console.log(data)
            }
        )
    }
)