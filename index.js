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
function accordionOnTrigger(event) {
  if (event.type === 'keydown' && !isEnterOrSpace(event)) return

  if (!event.target.classList.contains(classes.trigger)) return

  if (event.target.classList.contains(classes.active)) return

  if (event.target === event.currentTarget) return

  var triggers = event.currentTarget.getElementsByClassName(classes.trigger)

  for (var idx = 0; idx < triggers.length; idx++) {
    triggers[idx].classList.remove(classes.active)
  }

  event.target.classList.add(classes.active)
}

function DOMContentLoaded() {
  var accordion = document.getElementById(ids.accordion)

  if (accordion) {
    accordion.addEventListener('click', accordionOnTrigger)
    accordion.addEventListener('keydown', accordionOnTrigger)
  }
}

window.addEventListener('DOMContentLoaded', DOMContentLoaded)
