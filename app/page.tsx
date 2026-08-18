import Image from "next/image";
import topimage from "./topimage.jpg"

export default function Home() {
  return (
    <div>
      <Image src={topimage} alt="top image" loading="eager"></Image>
      <div className="m-10">
        <section>
            <h1>このサイトは何か？</h1>
            <p>これはnext.jsを勉強するために作られたブログサイトです。</p>
        </section>
        <section>
            <h1>ブログを書いているのは誰か？</h1>
            <p><a href="/about">ABOUT</a>をどうぞ</p>
        </section>
        <section>
            <h1>何を書いているのか？</h1>
            <p><a href="/article">ARTICLE</a>をどうぞ</p>
        </section>
        <section>
            <h1>今後について</h1>
            <p>ゆくゆくはこれをベースに総括をウェブサイトとして提出したい</p>
        </section>
      </div>
    </div>
  );
}
