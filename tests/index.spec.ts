import tailwindcss from 'tailwindcss'
import postcss from 'postcss'
import cssMatcher from 'jest-matcher-css'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import RoundedInherit from '../dist/index'

expect.extend({
	toMatchCss: cssMatcher
})

function generateUtilityCSS(config:Partial<TailwindConfig&{safelist:string[]}> = {}) {
	config = Object.assign({}, { safelist: [{ pattern: /.*/ }], theme: {}, corePlugins: [] }, config)
	return postcss(
		tailwindcss({
			...config as TailwindConfig,
			plugins: [RoundedInherit]
		})
	).process('@tailwind utilities;', {
		from: undefined,
	}).then(result => {
		return result.css;
	})
}

describe('Tailwind CSS Rounded Inherit', () => {
	it('should generate modified `borderRadius` utilities with the core plugin enabled', () => {
		const output = `
			.rounded-md {
					border-radius: 0.375rem
			}
			.rounded-t-md {
					border-top-left-radius: 0.375rem;
					border-top-right-radius: 0.375rem
			}
			.rounded-r-md {
					border-top-right-radius: 0.375rem;
					border-bottom-right-radius: 0.375rem
			}
			.rounded-b-md {
					border-bottom-right-radius: 0.375rem;
					border-bottom-left-radius: 0.375rem
			}
			.rounded-l-md {
					border-top-left-radius: 0.375rem;
					border-bottom-left-radius: 0.375rem
			}
			.rounded-tl-md {
					border-top-left-radius: 0.375rem
			}
			.rounded-tr-md {
					border-top-right-radius: 0.375rem
			}
			.rounded-br-md {
					border-bottom-right-radius: 0.375rem
			}
			.rounded-bl-md {
					border-bottom-left-radius: 0.375rem
			}
			.rounded-inherit {
					border-radius: var(--tw-rounded-tl-inherit) var(--tw-rounded-tr-inherit) var(--tw-rounded-br-inherit) var(--tw-rounded-bl-inherit)
			}
			.rounded-t-inherit {
					border-top-left-radius: var(--tw-rounded-tl-inherit);
					border-top-right-radius: var(--tw-rounded-tr-inherit)
			}
			.rounded-r-inherit {
					border-top-right-radius: var(--tw-rounded-tr-inherit);
					border-bottom-right-radius: var(--tw-rounded-br-inherit)
			}
			.rounded-b-inherit {
					border-bottom-left-radius: var(--tw-rounded-bl-inherit);
					border-bottom-right-radius: var(--tw-rounded-br-inherit)
			}
			.rounded-l-inherit {
					border-top-left-radius: var(--tw-rounded-tl-inherit);
					border-bottom-left-radius: var(--tw-rounded-bl-inherit)
			}
			.rounded-tr-inherit {
					border-top-right-radius: var(--tw-rounded-tr-inherit)
			}
			.rounded-tl-inherit {
					border-top-left-radius: var(--tw-rounded-tl-inherit)
			}
			.rounded-br-inherit {
					border-bottom-right-radius: var(--tw-rounded-br-inherit)
			}
			.rounded-bl-inherit {
					border-bottom-left-radius: var(--tw-rounded-bl-inherit)
			}
			.rounded-md {
					--tw-rounded-tr-inherit: 0.375rem;
					--tw-rounded-tl-inherit: 0.375rem;
					--tw-rounded-br-inherit: 0.375rem;
					--tw-rounded-bl-inherit: 0.375rem
			}
			.rounded-t-md {
					--tw-rounded-tr-inherit: 0.375rem;
					--tw-rounded-tl-inherit: 0.375rem
			}
			.rounded-r-md {
					--tw-rounded-tr-inherit: 0.375rem;
					--tw-rounded-br-inherit: 0.375rem
			}
			.rounded-b-md {
					--tw-rounded-br-inherit: 0.375rem;
					--tw-rounded-bl-inherit: 0.375rem
			}
			.rounded-l-md {
					--tw-rounded-tl-inherit: 0.375rem;
					--tw-rounded-bl-inherit: 0.375rem
			}
			.rounded-tl-md {
					--tw-rounded-tl-inherit: 0.375rem
			}
			.rounded-tr-md {
					--tw-rounded-tr-inherit: 0.375rem
			}
			.rounded-br-md {
					--tw-rounded-br-inherit: 0.375rem
			}
			.rounded-bl-md {
					--tw-rounded-bl-inherit: 0.375rem
			}
		`

		return generateUtilityCSS({ theme: { borderRadius: { md: '0.375rem' } }, corePlugins: ['borderRadius'] }).then(result => {
			expect(result).toMatchCss(output)
		})
	})

	it('should not generate any `borderRadius` utilities with the core plugin disabled', () => {
		const output = ``

		return generateUtilityCSS({ theme: { borderRadius: { md: '0.375rem' } }, corePlugins: [] }).then(result => {
			expect(result).toMatchCss(output)
		})
	})
})