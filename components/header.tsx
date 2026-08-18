
function Item({ name , link }: { name: string ; link : string}) {
  return (
    <a href={link}><li className="hover:border-b-2 hover:border-white">{name}</li></a>
  );
}
const menus : string[] = ["HOME", "ABOUT", "ARTICLE", "CONTACT"]
const links : string[] = ["/", "/about", "/article", "/contact"]

export default function Header() {

  return(
    <header className="flex items-end text-white bg-gray-800">
        <div className="text-3xl pr-6 align-bottom">みなみblog</div>
        <div>
            <ul className="h-12 flex gap-4 items-end">
                {menus.map((name : string, index : number) => (
                      <Item key = {index} name={name} link ={links[index]}/>
                ))}
            </ul>
        </div>
    </header>
  )
}