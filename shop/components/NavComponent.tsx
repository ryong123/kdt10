import { Link } from 'react-router-dom';
export default function NavComponent() {
  return (
    <header className="h-10 flex pl-2 sm:pl-10 pr-2 sm:pr-10 flex-wrap">
      <nav className="flex h-full items-center w-full">
        <Link to="/">
          <div>LOGO</div>
        </Link>
        <div className="flex justify-end">
          <Link to="/">
            <div className="pl-2 sm:pl-10">HOME</div>
          </Link>
          <Link to="Shop">
            <div className="pl-2 sm:pl-10">SHOP</div>
          </Link>
          <Link to="basket">
            <div className="pl-2 sm:pl-10">BASKET</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
