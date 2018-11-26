const test = require('ava')
const isBrowserHack = require('.')

const hacks = [
	'!property',
	'$property',
	'&property',
	'*property',
	')property',
	'=property',
	'%property',
	'+property',
	'@property',
	',property',
	'.property',
	'/property',
	'`property',
	']property',
	'#property',
	'~property',
	'?property',
	':property',
	'|property',
	'_property',
	'-property',
	'(;property',
	'[;property',
	'-opacity',
	'-----test'
]

test('it recognizes browser hacks successfully', t => {
	t.plan(hacks.length)

	hacks.map(hack => t.true(isBrowserHack(hack)))
})

test('it handles casing correctly for hacks', t => {
	t.true(isBrowserHack('-PROPERTY'))
	t.true(isBrowserHack('-OPACITY'))
})

test('it does not mark regular properties as hacks', t => {
	t.false(isBrowserHack('color'))
	t.false(isBrowserHack('background-image'))
})

test('it does not mark custom properties as hacks', t => {
	t.false(isBrowserHack('--my-custom-property'))
	t.false(isBrowserHack('--My-Custom-Property'))
	t.false(isBrowserHack('--bgColor'))
})

test('it does not mark vendor prefixed properties as hacks', t => {
	t.false(isBrowserHack('-webkit-transition'))
	t.false(isBrowserHack('-moz-transition'))
	t.false(isBrowserHack('-khtml-transition'))
	t.false(isBrowserHack('-o-transition'))
})
