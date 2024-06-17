var ids = {
  accordion: 'accordion',
}

var classes = {
  active: 'active',
  trigger: 'trigger',
}

/**
 * @param {KeyboardEvent} event
 */
function isEnterOrSpace(event) {
  return (
    event.key === 'Enter' ||
    event.key === 13 ||
    event.key === ' ' ||
    event.key === 32
  )
}

/**
 * @param {MouseEvent | KeyboardEvent} event
 */
function accordionOnClick(event) {
  if (event.type === 'keydown' && !isEnterOrSpace(event)) return

  if (event.target === event.currentTarget) return

  if (event.target.classList.contains(classes.active)) return

  if (event.target.tagName !== 'A') return

  var triggers = event.currentTarget.getElementsByClassName(classes.trigger)

  for (var i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove(classes.active)
  }

  event.target.classList.add(classes.active)
}

function DOMContentLoaded() {
  var accordion = document.getElementById(ids.accordion)

  if (accordion) {
    accordion.addEventListener('click', accordionOnClick)
    accordion.addEventListener('keydown', accordionOnClick)
  }
}

window.addEventListener('DOMContentLoaded', DOMContentLoaded)
