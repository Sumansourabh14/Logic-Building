// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newAddress = address.split("");
    for (let i = 0; i <= address.length; i++) {
        if (newAddress[i] === ".") {
            newAddress[i] = "[.]";
        }
    }
    return newAddress.join("");
};
