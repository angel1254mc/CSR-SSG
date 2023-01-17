# CSR-SSG
A repo containing two otherwise identical programs to display some of the differences between Static Generation and Client Side Rendering

The biggest thing to note from this demo is the fact that the React App serves an empty index.html file, while the NextJS pre-renders as much of the HTML as possible.
### In the Working Directory
```cd csr_example``` or ```cd ssg_example```

Then, to install all dependencies

```npm install```

then
```npm run dev``` for Next App dev server
```npm start``` for React App dev server

If you open up Chrome Dev Tools with ```Ctrl```+```Shift```+```J``` and head to the Network tab, you'll be able to see the preview of the HTML document (localhost) that you first
receive from the server.

## NextJS
![image](https://user-images.githubusercontent.com/59091763/212926563-6817d7c6-105e-4577-b2f3-f788462cafb6.png)

## React
![image](https://user-images.githubusercontent.com/59091763/212926617-fe35db0b-0079-408d-81ef-5b2b9643ab54.png)
