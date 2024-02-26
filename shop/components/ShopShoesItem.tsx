function ShopShoesItem({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ml-2 mr-2 ">
        {data.map((item, key) => (
          <div key={key} className="border p-4">
            <p>좋아요</p>
            <img src={item.image} alt="" className="w-full"></img>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopShoesItem;
