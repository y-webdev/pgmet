export const resizeImage = () => {
    document.querySelectorAll('.square-img').forEach(image => {
        new ResizeObserver(img => {
            img[0].target.setAttribute('height', `${img[0].target.offsetWidth}px`)
        }).observe(image)
    })
}

export const blankModalSrc = (data) => {
    document.querySelector('#doc-modal').src = data
}

