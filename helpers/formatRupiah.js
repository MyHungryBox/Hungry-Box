function formatRupiah(money) {
    let reverse = money.toString().split('').reverse().join('')
    let thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join('.').split('').reverse().join('');
    return 'Rp. ' + thousand
}

module.exports = formatRupiah