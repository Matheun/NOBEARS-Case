const data = {
	"left": 0,
	"top": 0,
	"width": 32,
	"height": 32,
	"body": "<g fill=\"none\"><circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"#3C60A7\"/><path fill=\"#fff\" d=\"M7.967 14.91c-.002-.802.59-1.302 1.271-1.318.164-.002.36.077.525.143.06.024.116.047.164.063.17.057.209.044.28.05.153.01.349.002.385-.157h.17l-.4 1.354h-.156c-.065-.535-.276-1.046-.762-1.04-.26.004-.522.106-.605.471-.102.441.12.707.689 1.258.368.36.65.668.652 1.124.005.88-.704 1.352-1.427 1.354-.307.002-.485-.067-.63-.123a.728.728 0 00-.302-.07l-.054.002c-.155.002-.421.007-.465.155h-.17l.446-1.62h.17c-.162.68.248 1.244.835 1.244.397 0 .765-.347.775-.569.017-.433-.06-.503-.301-.725a5.208 5.208 0 01-.377-.376l-.065-.072c-.328-.362-.645-.713-.648-1.149Zm2.928-.87.05-.265h1.485l-.073.266c-.257 0-.255.137-.254.233V16.3l.037-.024.979-1.58v-.376c.002-.206-.097-.274-.327-.28l.05-.265h1.524l-.05.266c-.219 0-.297.005-.29.29.003.057 0 .13 0 .205v1.667l.024.037 1.125-1.837a.393.393 0 00.06-.23c-.008-.146-.142-.142-.354-.135-.047.001-.1.003-.155.003l.05-.266h1.367l-.06.266c-.258.005-.334.13-.436.313 0 0-2.218 3.66-2.322 3.82-.105.158-.206 0-.206 0l.013-2.732v-.084s-1.605 2.659-1.704 2.818c-.1.159-.17 0-.17 0v-3.64c0-.495-.095-.495-.355-.495h-.008Zm5.405 0 .05-.265h1.771l-.06.266c-.318.005-.53.034-.616.326l-.845 3.12-.025.075c-.017.049-.033.094-.035.142v.014c-.006.105-.01.187.29.192l-.06.266h-1.778l.05-.266c.331.002.58-.107.629-.313l.835-3.108c.029-.114.065-.206.06-.266-.013-.14-.141-.187-.266-.182Zm2.01 0 .06-.265h3.058l-.314 1.171h-.17c.043-.72-.263-.804-.774-.798h-.048c-.25.004-.29.004-.398.375l-.267 1.065h.17c.133.005.504 0 .678-.446l.17.023-.313 1.294h-.206a1.09 1.09 0 01-.008-.125c0-.052-.001-.111-.005-.177-.01-.199-.115-.246-.483-.243h-.084l-.386 1.33a3.814 3.814 0 01-.063.255l-.01.035c-.083.318.084.376.496.376l-.073.266h-1.887l.073-.266c.238-.008.433-.094.496-.376l.81-3.021c.025-.11.002-.078.023-.146.088-.282-.222-.304-.477-.321a8.45 8.45 0 01-.069-.005Zm3.034.906.326-1.171h3.012l-.313 1.171h-.183c.04-.548-.086-.798-.712-.798l-.823 3.13c-.017.078-.037.148-.054.208-.012.04-.022.075-.029.105-.05.196.107.363.363.34l-.05.242h-1.996l.06-.266h.018c.375-.008.672-.014.73-.532l.883-3.227c-.337 0-.55.07-.75.242-.176.158-.193.217-.267.48l-.022.076h-.193ZM13.87 17.97c.029-.16.139-.29.243-.29.104 0 .172.13.146.29-.029.159-.138.29-.243.29-.107 0-.172-.131-.146-.29Zm3.095 0c.029-.16.139-.29.243-.29.104 0 .172.13.146.29-.029.159-.138.29-.243.29-.107 0-.172-.131-.146-.29Zm2.662 0c.029-.16.138-.29.243-.29.104 0 .159.13.133.29-.029.159-.139.29-.243.29-.104 0-.16-.131-.133-.29Zm-9.517.01c.026-.159.125-.29.23-.29.104.003.172.131.146.29-.03.16-.139.29-.243.29-.104 0-.16-.13-.133-.29Zm13.071 0c.029-.159.139-.29.243-.29.104.003.172.131.146.29-.029.16-.138.29-.243.29-.107 0-.172-.13-.146-.29Z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M12.107 25.215A9.944 9.944 0 0016 26a9.9 9.9 0 003.893-.79 9.973 9.973 0 003.179-2.142A9.97 9.97 0 0026 15.998a9.97 9.97 0 00-2.928-7.07A9.973 9.973 0 0016 6a9.944 9.944 0 00-7.072 2.932A9.97 9.97 0 006 16.002a9.97 9.97 0 002.928 7.07 9.972 9.972 0 003.178 2.143Zm4.138.211v-2.645h2.965c-.3.393-.634.772-1.002 1.132a10.417 10.417 0 01-1.963 1.513Zm-2.45-1.531a9.807 9.807 0 01-.981-1.114h2.91V25.4a10.336 10.336 0 01-1.93-1.505Zm.973 1.502a9.403 9.403 0 01-5.391-2.616h2.792c.365.527.793 1.027 1.274 1.5.495.488.97.86 1.325 1.116Zm3.792-1.1a10.66 10.66 0 001.294-1.516h2.767a9.398 9.398 0 01-5.374 2.614c.371-.266.833-.632 1.313-1.099Zm4.559-2.038h-2.923a8.85 8.85 0 001.112-2.794h3.523a9.464 9.464 0 01-1.712 2.794Zm-3.541 0h-3.333v-2.797h4.528a8.351 8.351 0 01-1.195 2.797Zm-3.855 0h-3.277a7.615 7.615 0 01-.142-.223l-.067-.109a8.337 8.337 0 01-.979-2.462h4.465v2.794Zm-3.893 0H8.88a9.388 9.388 0 01-1.712-2.797h3.557a8.802 8.802 0 001.07 2.74c.01.02.023.038.034.057Zm13.186-3.316H6.981a9.576 9.576 0 01-.002-5.87H25.02A9.45 9.45 0 0125.48 16a9.5 9.5 0 01-.465 2.943Zm-.18-6.395h-3.614a8.893 8.893 0 00-1.068-2.752l-.02-.03-.006-.012h3.004a9.382 9.382 0 011.704 2.794Zm-4.146 0h-4.445V9.752h3.27a8.428 8.428 0 011.174 2.797Zm-4.967 0h-4.535a8.318 8.318 0 011.198-2.794h3.337v2.794Zm-5.07 0h-3.49a9.385 9.385 0 011.705-2.794h2.902a8.729 8.729 0 00-1.117 2.794Zm11.986-3.316h-2.845a10.892 10.892 0 00-1.276-1.523 11.377 11.377 0 00-1.3-1.112 9.419 9.419 0 015.42 2.635Zm-3.487 0h-2.907V6.574c.29.172 1.068.676 1.905 1.505.368.368.705.752 1.002 1.153Zm-3.429 0H12.76a9.987 9.987 0 011.025-1.147 10.439 10.439 0 011.94-1.495v2.642Zm-3.611 0h-2.75a9.415 9.415 0 015.383-2.63c-.373.267-.833.63-1.313 1.094-.498.482-.94.996-1.32 1.536Z\" clip-rule=\"evenodd\"/></g>"
};
export default data;