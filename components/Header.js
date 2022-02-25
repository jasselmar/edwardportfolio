const Header = () => {
  return (
    <header className="fixed w-full backdrop-blur">
      <div className="flex flex-col items-center space-y-2 p-5 sm:mx-auto sm:max-w-7xl sm:flex-row sm:justify-between sm:space-y-0 xl:px-0 ">
        <div>
          <a href="mailto:esalcedo.al@gmail.com" target="_blank">
            <h1 className="font-heading text-2xl ">Edward Salcedo</h1>
          </a>
        </div>
        <div className="space-x-5 text-lg font-thin ">
          <a href="/EDWARDSALCEDOPORTAFOLIO.pdf" target="_blank">
            acerca
          </a>
          <a href="https://www.instagram.com/edwardlsalcedo/" target="_blank">
            instagram
          </a>
          <a href="mailto:esalcedo.al@gmail.com" target="_blank">
            contacto
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
