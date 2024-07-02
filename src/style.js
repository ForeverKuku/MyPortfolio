function downloadCV() {
    alert("https://docs.google.com/document/d/1z16WCZ1YjgFGZpSNFgVBBbP9vyHV6_dbSxCFHw6O64o/");
  }

  function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
  }


  