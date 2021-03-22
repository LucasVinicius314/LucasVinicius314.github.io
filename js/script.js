const frequency = 1 / 30

let activated = false
let elementsBorder, elementsTitle, elementHeader, elementMeme, elementButton
let h = 0

const fetchElements = (selector, method) => {
  return Object.entries(document[method](selector)).map(([, v]) => v)
}

const ToggleRGB = () => {
  activated = !activated
}

const Load = () => {
  elementsBorder = fetchElements('section', 'getElementsByTagName')
  elementsTitle = fetchElements('title', 'getElementsByName')
  elementHeader = document.getElementById('header')
  elementMeme = document.getElementById('meme')
  elementButton = document.getElementById('button')

  setInterval(() => {
    if (activated) {
      elementsBorder.forEach((e) =>
        e.setAttribute(
          'style',
          `border-left: hsl(${h % 360}, 100%, 50%) 5px solid`
        )
      )

      elementsTitle.forEach((e) =>
        e.setAttribute('style', `color: hsl(${h % 360}, 100%, 50%)`)
      )

      elementHeader.setAttribute(
        'style',
        `background: hsl(${h % 360}, 100%, 50%)`
      )

      elementButton.setAttribute(
        'style',
        `background: hsl(${h % 360}, 100%, 50%)`
      )

      if (elementMeme != null) {
        elementMeme.setAttribute('style', `color: hsl(${h % 360}, 100%, 50%)`)
      }

      h++
    } else {
      try {
        elementsBorder.forEach((e) =>
          e.setAttribute('style', 'border-left: #56595e 5px solid')
        )
      } catch {}

      elementsTitle.forEach((e) => e.setAttribute('style', 'color: #d5d5d5'))

      elementHeader.setAttribute('style', 'background: #202225')
      elementButton.setAttribute('style', 'background: #7289da')

      if (elementMeme != null) {
        elementMeme.setAttribute('style', 'color: #aaa')
      }
    }
  }, frequency)
}
