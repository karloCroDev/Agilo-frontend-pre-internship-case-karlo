
# Agilo frontend pre-internship case assignment (Karlo)

**Description:** This is my final solution to the task you have given me. Users can search and filter products, and they also can view for each product by clicking on it to see more details about the product. Also inside the product detail page user has better insight about details, or more images of the product. There is also a recommendation section which recommends user the products from the same category as the product that he/she is currently looking at its details. For the products information and images  I have used an api https://dummyjson.com/docs/products

**Important notes:** 

  "As a customer, I should be able to choose among the product variants" - so I am retrieving from an api all kind of products so you will not found product variants e.g. apple, but you will find it in shoes, watches etc. (see the condition I wrote in my code) Also for the products you will see I am not retrieving for different variants images so you can only change the state of radio buttons, that suggest you what color of the product you have chosen. I hope I compensated that part with recommendation section and with search functionality

Images in product details page are loading a bit slower than thumbnail images. Also some images that have more than one item in array have a button to change between images

**This task is built with:**
 - Next.js
 - TypeScript
 - Tailwind CSS

**Time spent**

 - So I created the repository on June 20th, however I started developing the project on June 22th (after my school year 
   had finished and my aside programming competitions ended).
 - I finished all the requirements on June 26 (Wednesday)
 - June 27 I cleaned and commented the code, and deployed it on Vercel 

**Implementation that was most challenging**

 - The most challenging part was definitely the usage of tailwind CSS, as this was the first time I was dealing with that technology. I decided to use that technology  because it was in preferred technical requirements section, and because of my promise in motivation letter

**Implementation that I am most proud of**
 - The idea of 2d array for listing products and categories that is main factor for scalability of this app. More detailed description is explained in `MainContent.tsx` component and also to test the implementation, change the number of items in call variable inside the `Home.tsx` component

**Project structure** 
 - Home (folder) - starting page (home page)
 - [slug] (folder) - product page
 - customs (folder) - reusable components for titles, radio buttons  etc.
 - contexes (folder) - folder that contains different type of contexts for sharing the state across components
 -  global-components (folder) - components that are used in at least two pages or components that are included in `layout.tsx` file  
 - global-types(folder) - folder for the types that will be reused multiple times across the components
 - `fonts.ts` (file) - next.js has already included google fonts inside itself so I used this for global sharing the fonts

**For more info** 

 - **Design:** https://www.figma.com/design/vMdQQ3sTIW8coMP8QjBViY/Pre-internship-case-Agilo?node-id=0-1&t=mkzqoTkUZtM10eBY-1
**Live demo:** https://agilo-frontend-pre-internship-case-karlo.vercel.app/ 

***Images (if you are interested)***:

![image](https://github.com/karloCroDev/Agilo-frontend-pre-internship-case-karlo/assets/117281346/1f466690-3e83-4ffa-92d8-e3e8ddd7017a)

![image](https://github.com/karloCroDev/Agilo-frontend-pre-internship-case-karlo/assets/117281346/24c306cb-8d10-4e49-814b-5152897ff5d4)

![image](https://github.com/karloCroDev/Agilo-frontend-pre-internship-case-karlo/assets/117281346/dc3ba85b-6a1f-4b8f-b483-bed9616c6684)


![image](https://github.com/karloCroDev/Agilo-frontend-pre-internship-case-karlo/assets/117281346/4fec6792-f3c6-4969-ad23-298142c7e04f)
