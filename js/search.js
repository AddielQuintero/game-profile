const filter = document.querySelectorAll('.filter')
const th = document.querySelector('.th')
const bars = document.querySelector('.bars')
const rs = document.querySelector('section')

// function show_result() {
th.addEventListener('click', () => {
  rs.classList.add('result__search')
  rs.classList.remove('result__search-bars')
})

bars.addEventListener('click', () => {
  rs.classList.remove('result__search')
  rs.classList.add('result__search-bars')
})

filter.forEach((item) => {
  item.addEventListener('click', () => {
    filter.forEach((item2) => {
      item2.classList.remove('active')
    })
    item.classList.toggle('active')
  })
})
// }
