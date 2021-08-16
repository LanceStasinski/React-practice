import { Route } from "react-router-dom";
import { useParams } from "react-router";

import Comments from "../components/comments/Comments";

const QuoteDetail = (props) => {
  const params = useParams();
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
