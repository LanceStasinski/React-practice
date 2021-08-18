//domain.com/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/stuff">Stuff</Link>
        </li>
        <li>
          <Link href="/news/stuff-2">Stuff 2</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
