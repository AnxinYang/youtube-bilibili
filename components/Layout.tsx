import Category from "./Category";
import PageHead from "./Head";
import Header from "./Header";
import Headline from "./Headline";
import Player from "./Player";

export default function Layout() {
    return (
        <div>
            <PageHead />
            <Header />
            <Category />
            <Headline />
            <Player />
        </div>
    )
}