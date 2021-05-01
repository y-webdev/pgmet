import bbCodeParser from 'js-bbcode-parser'

export const parseBBCode = (data) => {
    bbCodeParser.setCodes({
        '\\[h1\\]': '<h1>',
        '\\[\\/h1\\]': '</h1>',
        '\\[h3\\]': '<h3>',
        '\\[\\/h3\\]': '</h3>',
        '\\[h4\\]': '<h4>',
        '\\[\\/h4\\]': '</h4>',
        '\\[h5\\]': '<h5>',
        '\\[\\/h5\\]': '</h5>',
        '\\[p\\]': '<p>',
        '\\[\\/p\\]': '</p>',
        '\\[br\\]': '<br>',
        '\\[b\\]': '<strong>',
        '\\[\\/b\\]': '</strong>',
        '\\[u\\]': '<u>',
        '\\[\\/u\\]': '</u>',
        '\\[i\\]': '<span class="font-light">',
        '\\[\\/i\\]': '</span>',
        '\\[color=([^"><]*?)\\]': '<span class="$1">',
        '\\[\\/color\\]': '</span>',
        '\\[url\\]((?:ftp|https?)://[^"><]*?)(.*?)\\[\\/url\\]': '<a href="$1" class="dd-link" target="_new">$2</a>',
        '\\[img size=(.*?)\\](.*?)\\[\\/img\\]': '<img class="$1" src="$2" alt="">',
        '\\[left\\]': '<p class="text-start">',
        '\\[\\/left\\]': '</p>',
        '\\[right\\]': '<p class="text-end">',
        '\\[\\/right\\]': '</p>',
        '\\[justify\\]': '<p class="text-justify">',
        '\\[\\/justify\\]': '</p>',
        '\\[center\\]': '<p class="text-center">',
        '\\[\\/center\\]': '</p>',
        '\\[lightbox group=(.*?)\\](.*?)\\[\\/lightbox\\]': '<a class="example-image-link col-lg-3 col-md-4 col-sm-6 mb-4" href="$2" data-lightbox="$1"><img src="$2" class="square-img w-100 border p-1"></a>',
        '\\[lightbox2 group=(.*?)\\](.*?)\\[\\/lightbox2\\]': '<a class="example-image-link" href="$2" data-lightbox="$1"><img src="$2" class="w-25 border p-1 mr-3 float-left"></a>',
        '\\[list\\]': '<ul class="ml-5">',
        '\\[\\/list\\]': '</ul>',
        '\\[list=1\\]': '<ol class="ml-5">',
        '\\[\\/list=1\\]': '</ol>',
        '\\[li\\]': '<li>',
        '\\[\\/li\\]': '</li>',
        '\\[pdf=(.*?)\\](.*?)\\[\\/pdf\\]': `<a href="${process.env.VUE_APP_DOCS_PATH}pdf/$1" class="btn border mb-3 ps-5 position-relative w-100 pdf" download="$1">$2</a>`,
        '\\[row\\]': '<div class="row">',
        '\\[\\/row\\]': '<div>'
    });

    return bbCodeParser.parse(data)
}
