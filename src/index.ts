import plugin from 'tailwindcss/plugin'

module.exports = plugin((api) => {
	if (!api.config('corePlugins').includes('borderRadius')) return

	api.addUtilities({
		'.rounded-inherit': {
			'border-radius': 'var(--tw-rounded-tl-inherit) var(--tw-rounded-tr-inherit) var(--tw-rounded-br-inherit) var(--tw-rounded-bl-inherit)'
		},
		'.rounded-t-inherit': {
			'border-top-left-radius': 'var(--tw-rounded-tl-inherit)',
			'border-top-right-radius': 'var(--tw-rounded-tr-inherit)',
		},
		'.rounded-r-inherit': {
			'border-top-right-radius': 'var(--tw-rounded-tr-inherit)',
			'border-bottom-right-radius': 'var(--tw-rounded-br-inherit)',
		},
		'.rounded-b-inherit': {
			'border-bottom-left-radius': 'var(--tw-rounded-bl-inherit)',
			'border-bottom-right-radius': 'var(--tw-rounded-br-inherit)',
		},
		'.rounded-l-inherit': {
			'border-top-left-radius': 'var(--tw-rounded-tl-inherit)',
			'border-bottom-left-radius': 'var(--tw-rounded-bl-inherit)',
		},
		'.rounded-tr-inherit': {
			'border-top-right-radius': 'var(--tw-rounded-tr-inherit)',
		},
		'.rounded-tl-inherit': {
			'border-top-left-radius': 'var(--tw-rounded-tl-inherit)',
		},
		'.rounded-br-inherit': {
			'border-bottom-right-radius': 'var(--tw-rounded-br-inherit)',
		},
		'.rounded-bl-inherit': {
			'border-bottom-left-radius': 'var(--tw-rounded-bl-inherit)',
		},
	})

	api.matchUtilities(
		{
			'rounded': (value) => ({
				'--tw-rounded-tr-inherit': value,
				'--tw-rounded-tl-inherit': value,
				'--tw-rounded-br-inherit': value,
				'--tw-rounded-bl-inherit': value,
			}),
			'rounded-t': (value) => ({
				'--tw-rounded-tr-inherit': value,
				'--tw-rounded-tl-inherit': value,
			}),
			'rounded-r': (value) => ({
				'--tw-rounded-tr-inherit': value,
				'--tw-rounded-br-inherit': value,
			}),
			'rounded-b': (value) => ({
				'--tw-rounded-br-inherit': value,
				'--tw-rounded-bl-inherit': value,
			}),
			'rounded-l': (value) => ({
				'--tw-rounded-tl-inherit': value,
				'--tw-rounded-bl-inherit': value,
			}),
			'rounded-tr': (value) => ({
				'--tw-rounded-tr-inherit': value
			}),
			'rounded-tl': (value) => ({
				'--tw-rounded-tl-inherit': value
			}),
			'rounded-br': (value) => ({
				'--tw-rounded-br-inherit': value
			}),
			'rounded-bl': (value) => ({
				'--tw-rounded-bl-inherit': value
			}),
		},
		{
			values: api.theme('borderRadius')
		}
	)
})
