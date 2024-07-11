import './navbar.css'

function NavBar() {

  return (
    <>
      <div className='NavBar'>
        <a>Image Logo</a>
        <a>Nama Website</a>
        <a className='SearchBar'>
          <input type="text" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button type="button" id="searchButton">Button</button>
        </a>
        <a><button type="button">Shopping Cart</button></a>
      </div>
    </>
  )
}

export default NavBar