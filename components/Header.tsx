export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2 px-6 flex flex-col md:flex-row gap-2 justify-between text-center">
        <span>Trusted Senior Care Essentials</span>
        <span>Free Delivery Above ₹999</span>
        <span>Customer Care: +91 89043 28298</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-6">

         {/* Logo */}
<a href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="SeniorKart Logo"
    className="h-28 w-auto"
  />
</a>

          {/* Search Box */}
          <div className="flex w-full md:flex-1">
  <select className="border border-gray-300 rounded-l-xl px-4 py-3 bg-white text-gray-700 outline-none">
    <option>All Categories</option>
    <option>Groceries</option>
    <option>Health Monitoring</option>
    <option>Medicines & Wellness</option>
    <option>Personal Care</option>
    <option>Mobility Aids</option>
    <option>Comfort & Safety</option>
    <option>Care Boxes</option>
  </select>

  <input
    list="product-search"
    type="text"
    placeholder="Search rice, dal, BP monitor, diapers..."
    className="w-full border-t border-b border-gray-300 px-5 py-3 outline-none focus:border-green-700"
  />

  <datalist id="product-search">
    <option value="Rice" />
    <option value="Dal" />
    <option value="Atta" />
    <option value="Oil" />
    <option value="Tea" />
    <option value="Coffee" />
    <option value="Biscuits" />
    <option value="Sugar" />
    <option value="Salt" />
    <option value="Rava" />
    <option value="Poha" />
    <option value="Blood Pressure Monitor" />
    <option value="Glucometer" />
    <option value="Thermometer" />
    <option value="Adult Diapers" />
    <option value="Walking Stick" />
    <option value="Anti-Slip Bathroom Mat" />
    <option value="SeniorKart Essential Care Box" />
    <option value="Diabetes Care Box" />
    <option value="Comfort Care Box" />
  </datalist>

  <button className="bg-green-700 text-white px-6 rounded-r-xl hover:bg-green-800">
    Search
  </button>
</div>
          {/* Right Menu */}
          <div className="flex gap-6 font-semibold text-sm">
            <a href="#">Login</a>
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
          </div>

        </div>

        {/* Navigation */}
        <nav className="border-t">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto whitespace-nowrap font-medium">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="/products" className="hover:text-green-700">Shop</a>
            <a href="/care-boxes" className="hover:text-green-700">Care Boxes</a>
            <a href="/build-box" className="hover:text-green-700">Build Your Box</a>
            <a href="/about" className="hover:text-green-700">About</a>
            <a href="/contact" className="hover:text-green-700">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
}