import QuoteForm from "../components/quotes/QuoteForm";

const addQuoteHandler = (quoteData) => {
  console.log(quoteData);
};

const NewQuote = (props) => {
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
