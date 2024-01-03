import bookimg from './다운로드.jpeg';

function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <div style={{ backgroundColor: 'salmon' }}>
        <h2 className="title">{title}</h2>
        <img src={bookimg} alt="" />
        <p className="content">제목 : {author}</p>
        <p className="content">가격 : {price}</p>
        <p className="content">종류 : {type}</p>
      </div>
    </div>
  );
}

export default Book;