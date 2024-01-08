import axios from "axios";

const url = "http://localhost:5000/posts";

export const customFetch = axios.create({
  baseURL: url,
});

//function to convert a input file to base64 url
export const convertBase64 = (file) =>
  new Promise((resolve, reject) => {
    console.log(file);
    //file reader is async
    const fileReader = new FileReader();
    //resolve the promise when the file is converted
    fileReader.onloadend = () => {
        resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
        console.log("Please make sure that the input is correct");
        reject(error);
    };
    fileReader.readAsDataURL(file);
});
