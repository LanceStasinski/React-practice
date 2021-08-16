import { Route, Link } from "react-router-dom";
import { useParams } from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lance", text: "Learning React is fun" },
  { id: "q1", author: "LanceA", text: "Learning React is great" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
