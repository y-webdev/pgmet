import {Popover, Tooltip, Modal} from "bootstrap";

export const resizeImage = () => {
    const images = document.querySelectorAll('.square-img');
    images.forEach(image => {
        new ResizeObserver(entries => {
            entries[0].target.setAttribute('height', `${entries[0].target.offsetWidth}px`)
        }).observe(image)
    })
}

export const blankModalSrc = (data) => {
    document.querySelector('#doc-modal').src = data;
}

export const popoverTrigger = () => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(el => new Popover(el, {
        html: true
    }))
}

export const tooltipTrigger = () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(el => new Tooltip(el, {
        boundary: 'window'
    }))
}

export const fileSizeErrorModal = (modalEl) => {
    return new Modal(modalEl, {
        keyboard: false
    })
}
