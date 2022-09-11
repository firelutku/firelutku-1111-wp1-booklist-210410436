import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61rpXrfXwML._AC_UL320_.jpg' alt=''></img>
      <h1>The Elephant Tooth of '95: An Enchanting Story of Family, Romance and New Beginnings</h1>
      <h4>Rana Baydoun</h4>
    </article>
  )
}
export default App;
