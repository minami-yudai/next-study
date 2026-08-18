import { title } from "@/app/strings.json";
import { menu } from "@/app/strings.json";
import { menulink } from "@/app/strings.json";

function Item({ name , link }: { name: string ; link : string}) {
  return (
    <a href={link} className="text-right"><li>{name}</li></a>
  );
}

export default function Footer() {

  return(
    <footer className="text-gray-800 bg-gray-400 flex p-10">
        <div className="pr-6">
          <p className="text-2xl">{title}</p>
          <p>next.jsの勉強用サイト</p>
          <p>github:<a href="https://github.com/minami-yudai/next-study">https://github.com/minami-yudai/next-study</a></p>
        </div>
        <div className="ml-auto">
            <ul>
                {menu.map((name : string, index : number) => (
                      <Item key = {index} name={name} link ={menulink[index]}/>
                ))}
            </ul>
        </div>
    </footer>
  )
}