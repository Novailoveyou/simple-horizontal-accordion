// * There are intentional uses of `var` instead of `let` or `const` to support older browsers while not using any compilers & builders.
// * The same goes for `function` instead of arrow functions, `for` loop instead of `forEach`, `getElementsByClassName` instead of `querySelectorAll`, etc.

var ids = {
  accordion: 'accordion',
}

var classes = {
  active: 'active',
  trigger: 'trigger',
}

/**
 * @param {KeyboardEvent['key']} key
 */
function isEnterOrSpace(key) {
  return key === 'Enter' || key === 13 || key === ' ' || key === 32
}

/**
 * @param {MouseEvent | KeyboardEvent} event
 */
function accordionOnAction(event) {
  if (event.type === 'keydown' && !isEnterOrSpace(event.key)) return

  // * Action outside of triggers
  if (!event.target.classList.contains(classes.trigger)) return

  // * Action on active trigger
  if (event.target.classList.contains(classes.active)) return

  var triggers = event.currentTarget.getElementsByClassName(classes.trigger)

  for (var idx = 0; idx < triggers.length; idx++) {
    triggers[idx].classList.remove(classes.active)
  }

  event.target.classList.add(classes.active)
}

function DOMContentLoaded() {
  var accordion = document.getElementById(ids.accordion)

  if (accordion) {
    accordion.addEventListener('click', accordionOnAction)
    accordion.addEventListener('keydown', accordionOnAction)
  }
}

window.addEventListener('DOMContentLoaded', DOMContentLoaded)
