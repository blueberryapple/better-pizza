/* originally by mary lou (https://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/)
 * edit by me to remove classie dependency since it's no longer supported by its author
 * see https://github.com/desandro/classie
 * also cleaned up the code for readability
 */
document.querySelectorAll('input.input__field')
    .forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim()) {
            //classie.add(inputEl.parentNode, 'input--filled');
            inputEl.parentNode.classList.add('input--filled');
        }

        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

function onInputFocus(ev) {
    //classie.add(ev.target.parentNode, 'input--filled');
    ev.target.parentNode.classList.add('input--filled');
}

function onInputBlur(ev) {
    if (!ev.target.value.trim()) {
        //classie.remove( ev.target.parentNode, 'input--filled' );
        ev.target.parentNode.classList.remove('input--filled');
    }
}
