function Experience() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full">
       <div className="image_container w-1/3 flex justify-center">
         <img src='Daphnis Labs.jpeg' alt="" className="w-[270px]" />
       </div>

       <div className="info_container w-1/3 space-y-3">
        <h1 className="text-3xl font-extrabold font-sans text-red-400">Daphnis Labs</h1>
        <h1 className="font-extrabold font-sans text-stone-500">Frontend Developer Intern | Oct 2023 - Mar 2024 |</h1>


        <ul style={{ listStyleType: 'square' }} className="space-y-3">
                    <li className="text-sm">   Worked in a team of cross platform teams and contributed in building UI for the client based projects like Ecommerce , Warehouse app tailored to the client needs.</li>

                    <li className="text-sm">Assisted in developing multiple client-based projects, including E-commerce, warehouse, and booking applications, by designing and developing reusable UI components using Next.js, React, Redux, and Tailwind CSS.</li>

                    <li className="text-sm">Build custom admin panels tailored to client requirements.</li>
                </ul>
       </div>
    </div>
  );
}

export default Experience;
