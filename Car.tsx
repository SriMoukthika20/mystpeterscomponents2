//import React from 'react'

export default function Car() {
    const empData=[
        {name:"Audi",
            year:"2004",
            cost:"44.25 Lakh",
            image:"https://spn-sta.spinny.com/blog/20230612165825/Audi-A6.webp?compress=true&quality=80&w=1024&dpr=1.5"
         },
         {name:"Thar",
            year:"2010",
            cost:"11.35 Lakh",
            image:"https://img.gaadicdn.com/images/car-images/large/Mahindra/Thar/10745/1692257137907/223_Deep-Grey_333536.jpg"
         },
         {name:"BMW",
            year:"2007",
            cost:" 43.90 Lakh",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMa5nc8TsQv49NV66I15S_E70CIlWUjxLCg&s"
         },
         {name:"Honda",
            year:"1996",
            cost:" 22.45 Lakh",
            image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80"
         },
         {name:"Ford",
            year:"1995",
            cost:" 36.27 Lakh",
            image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/37640/endeavour-exterior-right-front-three-quarter-149473.jpeg?q=80"
         },
        
        
    ]

  return (
    <div>
   <div className="row row-cols-1 row-cols-md-2 g-4">
     {empData.map((place) => (
       <div className="col" key={place.name}>
         <div className="card">
           <img src={place.image} width="900px" className="card-img-top" alt={place.name} />
           <div className="card-body">
             <h1 className="card-title">{place.name}</h1>
             <p className="card-text">{place.year}, {place.cost}</p>
           </div>
         </div>
       </div>
     ))}
   </div>
 </div>
);
}
