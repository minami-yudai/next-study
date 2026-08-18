import { title } from "@/app/strings.json";
import { menu } from "@/app/strings.json";
import { menulink } from "@/app/strings.json";

function Item({ name , link }: { name: string ; link : string}) {
  return (
    <a href={link}><li className="hover:border-b-2 hover:border-white">{name}</li></a>
  );
}

export default function Header() {

  return(
    <header className="flex items-end text-gray-200 bg-gray-800">
        <div className="text-3xl m-2 mr-8 align-bottom pr-8 border-r-2 border-white">{title}</div>
        <div>
            <ul className="h-12 flex gap-4 items-end mb-2">
                {menu.map((name : string, index : number) => (
                      <Item key = {index} name={name} link ={menulink[index]}/>
                ))}
            </ul>
        </div>
    </header>
  )
}