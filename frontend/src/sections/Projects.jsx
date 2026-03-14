import ProductCard from "../components/ProductCard"

export default function Projects(){

return(

<section id="projects" className="py-24">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-semibold mb-14">
Our Projects
</h2>

<div className="grid md:grid-cols-2 gap-10">

<ProductCard
title="BuddyCode"
status="IN PROGRESS"
description="Collaborative coding platform for developers."
skills={["React.js","Express.js","Node.js","MongoDB" ,"WebRTC"]}
/>

<ProductCard
title="EcoVibe"
status="IN PROGRESS"
description="Sustainable product discovery platform."
skills={["React.js","Express.js","Node.js","MongoDB"]}
/>

<ProductCard
title="FindDevs.online"
status="PLANNED"
description="Platform to discover and hire developers."
skills={["React.js","Express.js","Node.js","MongoDB"]}
/>

</div>

</div>

</section>

)

}