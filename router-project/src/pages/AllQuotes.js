import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Lance', text: 'Learning React is fun'},
  {id: 'q2', author: 'LanceA', text: 'Learning React is great'},
]

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;