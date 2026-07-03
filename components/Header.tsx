export default function Header() {
  return (
    <>
      <div className="bg-green-900 text-white text-sm py-2 px-6 flex flex-col md:flex-row gap-2 justify-between text-center">
        <span>Trusted Senior Care Essentials</span>
        <span>Free Delivery Above ₹999</span>
        <span>Customer Care: +91 89043 28298</span>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-6">
          <a href="/" className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-green-700 text-white flex items-center justify-center font-bold text-xl">SK</div>
            <div>
              <h1 className="text-3xl font-bold text-green-700">SeniorKart</h1>
              <p className="text-xs text-gray-500">Everything Seniors Need</p>
            </div>
          </a>

          <div className="flex w-full md:flex-1">
            <input type="text" placeholder="Search products, care boxes, groceries..." className="w-full border border-gray-300 rounded-l-xl px-5 py-3 outline-none focus:border-green-700" />
            <button className="bg-green-700 text-white px-6 rounded-r-xl hover:bg-green-800">Search</button>
          </div>

          <div className="flex gap-4 font-semibold text-sm">
            <a href="#">Login</a>
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
          </div>
        </div>

        <nav className="border-t">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6 overflow-x-auto font-medium whitespace-nowrap">
            <a href="/">Home</a>
            <a href="/products">Shop</a>
            <a href="/care-boxes">Care Boxes</a>
            <a href="/build-box">Build Your Box</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
}
