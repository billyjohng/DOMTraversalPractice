const menuBtn = document.querySelector('.menu')
const siteLinks = document.querySelectorAll('li a');
const navlinks = document.querySelector('.nav-links')
const header = document.querySelector('.header-container')

window.addEventListener('click', e => {
    console.log(show);
})


menuBtn.addEventListener('click', e => {
    document.querySelector('.nav-links').classList.toggle('show')
})

function activeLink() {
    return Array.from(siteLinks).filter(x => {
        return x.classList.contains('active')
    })
}


Array.from(siteLinks).forEach(x => {
    x.addEventListener('click', e => {
        e.preventDefault();
        if (e.target != activeLink()) {
            activeLink().forEach(x => {
                x.classList.remove('active')
            })
        }
        x.classList.toggle('active')

        const href = e.target.getAttribute('href')
        const target = document.querySelector(href)
        
        
        let position = target.offsetTop;


        if (header.classList.contains('fixed') && navlinks.classList.contains('show')) {
            window.scrollTo({
                top: position - 100,
                left: 0,
                behavior: 'smooth'
            })
        } else if (navlinks.classList.contains('show') && !header.classList.contains('fixed')) {
            window.scrollTo({
                top: position - 425,
                left: 0,
                behavior: 'smooth'
            })

        } else if (header.classList.contains('fixed')) {
            window.scrollTo({
                top: position - header.getBoundingClientRect().height,
                left: 0,
                behavior: 'smooth'
            })
        }
        
        else {
            window.scrollTo({
                top: position - (header.getBoundingClientRect().height + 90),
                left: 0,
                behavior: 'smooth'
            })
        }




        document.querySelector('.nav-links').classList.toggle('show')
    })
})


window.addEventListener('scroll', e => {
    const headerheight = document.querySelector('.header-container').getBoundingClientRect().height;
    if (window.pageYOffset > headerheight) {
        document.querySelector('.header-container').classList.add('fixed')
    } else {
        document.querySelector('.header-container').classList.remove('fixed')
    }

    if (window.pageYOffset > 600) {
        document.querySelector('.to-top').classList.add('show-to-top')
    } else {
        document.querySelector('.to-top').classList.remove('show-to-top')
    }


})

document.querySelector('.to-top').addEventListener('click', e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
