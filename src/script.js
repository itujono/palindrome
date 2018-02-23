export default function checkPalindrome(text) {
    const initText = text.trim().toLowerCase().replace(/(?!\w)./g,'')
    const reverseText = initText.split('').reverse().join('')
    return initText === reverseText
}