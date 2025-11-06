import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  // Check if handle exists
  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return notFound();
  }

  // Example fallback (for development)
  const item2 = {
    _id: { $oid: "68e96256cb85c465dbb68f9d" },
    links: [
      {
        link: "https://www.cartoonnetwork.com/",
        linktext: "CartoonNetwork",
      },
      {
        link: "https://www.nick.com/",
        linktext: "Nick",
      },
      {
        link: "https://disneynow.com/",
        linktext: "Disney",
      },
    ],
    handle: "Cartoon",
    pic: "https://pbs.twimg.com/profile_images/1945782178123579392/R0hCNJpp_400x400.jpg",
    desc: "“Eyes that speak a language words can’t reach.” “Behind every profile picture lies a story waiting to be told.”",
  };

  const currentItem = item || item2;

  return (
    <div className="flex min-h-screen bg-red-100 justify-center items-start py-10">
      <div className="photo flex justify-center flex-col items-center gap-4">
        <div className="relative w-40 h-40 rounded-full overflow-hidden">
          <Image
            src={currentItem.pic}
            alt={`${currentItem.handle}'s profile`}
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>

        <span className="font-bold text-xl">@{currentItem.handle}</span>
        <span className="desc w-80 text-center text-gray-700">
          {currentItem.desc}
        </span>

        <div className="links mt-4 w-full flex flex-col items-center">
          {currentItem.links.map((item, index) => (
            <Link key={index} href={item.link} target="_blank">
              <div className="bg-purple-100 hover:bg-purple-200 transition shadow-lg px-6 py-4 min-w-80 flex justify-center rounded-md my-2 font-medium text-gray-800">
                {item.linktext}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
