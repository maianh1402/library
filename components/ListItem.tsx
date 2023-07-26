"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" src={image} fill alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition rounded-full flex items-center justify-center bg-blue-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 opacity-0">
        <BsFillBookmarkHeartFill className="text-while" />
      </div>
    </button>
  );
};

export default ListItem;
