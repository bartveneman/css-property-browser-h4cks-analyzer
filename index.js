const vendorPrefixes = require('vendor-prefixes')()

function startsWithHackCharacter(property) {
	// A property that starts with any of these characters is
	// considered a browser hack

	const startCharacters = '_ ! $ & * ( ) = % + @ , . / ` [ ] # ~ ? : < > | -'.split(
		' '
	)

	return startCharacters.some(character => property.startsWith(character))
}

function isVendorPrefixed(property) {
	return vendorPrefixes.some(prefix => property.startsWith(prefix))
}

function isCustomProperty(property) {
	return /^--[a-z]+/i.test(property)
}

module.exports = property => {
	return (
		startsWithHackCharacter(property) &&
		!isVendorPrefixed(property) &&
		!isCustomProperty(property)
	)
}
