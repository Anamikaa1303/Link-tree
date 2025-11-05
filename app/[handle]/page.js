import Link from 'next/link'
import clientPromise from '@/lib/mongodb'
import { notFound } from "next/navigation";



export default async function Page({ params }) {
  const handle  = (await params).handle
  const client = await clientPromise;
  const db = client.db('bittree')
  const collection = db.collection('links')
 
 // If the handle is already claimed, you cannot create the bittree
 const item = await collection.findOne({handle: handle}) 
 if(!item){
    return notFound()
 }

  const item2 = { 
  "_id": {
    "$oid": "68e96256cb85c465dbb68f9d"
  },
  "links": [
    {
      "link": "https://www.cartoonnetwork.com/",
      "linktext": "CartoonNetwork"
    },
    {
      "link": "https://www.nick.com/",
      "linktext": "Nick"
    },
    {
      "link": "https://disneynow.com/",
      "linktext": "disney"
    }
  ],
  "handle": "Cartoon",
  "pic": "https://pbs.twimg.com/profile_images/1945782178123579392/R0hCNJpp_400x400.jpg",
  "desc": "“Eyes that speak a language words can’t reach.”  “Behind every profile picture lies a story waiting to be told.”"
}
  
return <div className='flex min-h-screen bg-red-100 justify-center items-start py-10'>
   {item && <div className="photo flex justify-center flex-col items-center gap-4">
    <img src={item.pic} alt=""/>
    <span className='font-bold text-xl'>@{item.handle}</span>
    <span className='desc w-80 textt-center'>{item.desc}</span>
    <div className='links'>
        {item.links.map((item, index)=>{
            return <Link key={index} href={item.link}><div className='bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3'>
                {item.linktext}
            </div></Link>    
        })}

   </div>
   </div>}
  </div>
}