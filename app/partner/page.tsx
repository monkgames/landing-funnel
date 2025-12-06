// app/partner/page.tsx
'use client'

import type { CSSProperties } from 'react'
import '../styles/Home.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type CTA = {
	label: string
	href?: string
	variant?: Variant
	external?: boolean
}

type Pillar = {
	title: string
	body: string
	bullets: string[]
}

type Step = {
	label: string
	title: string
	body: string
}

type FAQItem = {
	question: string
	answer: string
}

type PartnerContent = {
	hero: {
		badge: string
		title: string
		subtitle: string
		ctas: CTA[]
	}
	who: {
		title: string
		subtitle: string
		items: Pillar[]
	}
	benefits: {
		title: string
		subtitle: string
		items: Pillar[]
	}
	steps: {
		title: string
		subtitle: string
		list: Step[]
	}
	eligibility: {
		title: string
		subtitle: string
		points: string[]
	}
	faq: {
		title: string
		items: FAQItem[]
	}
	finalCta: {
		title: string
		subtitle: string
	}
}

const content: PartnerContent = {
	hero: {
		badge: 'Partnerships · Operators · Platforms · Studios',
		title: 'Partner with MonkGames.',
		subtitle:
			'Whether you are an operator, platform, aggregator, or studio, partnering with MonkGames gives you engines, experiences, and a new economy built on fairness and creation.',
		ctas: [
			{
				label: 'Submit Partnership Request',
				href: '#partner-form',
				variant: 'primary',
			},
			{
				label: 'Explore Platform',
				href: '/platform',
				variant: 'secondary',
			},
		],
	},
	who: {
		title: 'Who becomes a MonkGames Partner?',
		subtitle:
			'Partnership paths vary depending on where you sit in the iGaming value chain.',
		items: [
			{
				title: 'Operators & Casino Groups',
				body: 'Operators looking to differentiate player experience through crash, instant-lotto, and themed rituals.',
				bullets: [
					'Single Gamdock integration across multiple brands.',
					'Theme activation per region, market, or campaign.',
					'Operator Console for visibility, risk, and compliance.',
				],
			},
			{
				title: 'Platforms & Aggregators',
				body: 'Platforms who onboard operators and need modern, fair, high-retention content.',
				bullets: [
					'Expose MonkGames engines via your API.',
					'Differentiate your catalog with crash + rituals.',
					'Offer themes and experiences to downstream operators.',
				],
			},
			{
				title: 'Studios & Creative Teams',
				body: 'Independent studios and builders who want to ship worlds, themes, and rituals using GamCore SDK.',
				bullets: [
					'Build and publish to the Marketplace.',
					'License worlds to operators.',
					'Earn recurring activation revenue.',
				],
			},
		],
	},
	benefits: {
		title: 'Why become a partner?',
		subtitle:
			'Partnership with MonkGames is not a vendor relationship — it is a shared opportunity.',
		items: [
			{
				title: 'Differentiated content',
				body: 'Crash and instant-lotto that feel alive, seasonal, and rooted in cultural experiences.',
				bullets: [
					'Higher retention and freshness.',
					'Brand-differentiation without custom engineering.',
					'A/B tested and optimized experiences.',
				],
			},
			{
				title: 'Faster launches',
				body: 'Go from evaluation → sandbox → staging → production using a unified console and integration layer.',
				bullets: [
					'Standardized API across all titles.',
					'Sandbox-ready test flows.',
					'Environment-awareness out of the box.',
				],
			},
			{
				title: 'Creator economy unlock',
				body: 'Themes, rituals, and world-building handled by creators, so operators focus on brand and market strategy.',
				bullets: [
					'Exclusive theme deals.',
					'Marketplace activations.',
					'Shared upside for everyone.',
				],
			},
		],
	},
	steps: {
		title: 'How partnership onboarding works',
		subtitle: 'A transparent, guided flow for teams of all sizes.',
		list: [
			{
				label: 'Step 01',
				title: 'Tell us about your brand or platform',
				body: 'Share your markets, stack, and what you want to achieve. We assess fit and prepare a relevant demo.',
			},
			{
				label: 'Step 02',
				title: 'Sandbox engines & console access',
				body: 'We provision sandbox keys and console roles so your team can test engines, limits, and themes.',
			},
			{
				label: 'Step 03',
				title: 'Integration & alignment',
				body: 'Your tech team integrates. Our team supports testing, risk setup, and theme evaluation.',
			},
			{
				label: 'Step 04',
				title: 'Launch, optimize & expand',
				body: 'Once live, activate themes, run campaigns, and work with creators to push differentiated experiences.',
			},
		],
	},
	eligibility: {
		title: 'Partnership eligibility',
		subtitle:
			'We move fastest with teams that meet a few baseline criteria:',
		points: [
			'Licensed or licensing-ready operators.',
			'Platforms with active operator pipelines.',
			'Studios with a track record of digital experiences.',
			'Clear ownership of wallets and compliance frameworks.',
		],
	},
	faq: {
		title: 'Frequently asked questions',
		items: [
			{
				question: 'How long does onboarding take?',
				answer: 'Most partners reach sandbox integration in under a week, and production within 2–4 weeks depending on markets.',
			},
			{
				question: 'What does a partnership cost?',
				answer: 'Pricing depends on engines, themes, markets, and usage. We tailor commercials to your footprint.',
			},
			{
				question: 'Can we request exclusive themes or content?',
				answer: 'Yes. Many partners negotiate exclusive or limited-run experiences for key brands or events.',
			},
			{
				question: 'Do small studios qualify as creator partners?',
				answer: 'Yes — as long as you can deliver high-quality assets and follow GamCore SDK packaging standards.',
			},
		],
	},
	finalCta: {
		title: 'Ready to join the MonkGames ecosystem?',
		subtitle: 'Become a partner and shape the next generation of iGaming.',
	},
}

function renderButton(cta: CTA, extraClass = '') {
	const variant: Variant = cta.variant ?? 'primary'
	const className = `btn btn-${variant} ${extraClass}`.trim()
	const href = cta.href ?? '#'
	const isExternal = cta.external && href.startsWith('http')

	return (
		<a
			key={cta.label}
			href={href}
			className={className}
			target={isExternal ? '_blank' : '_self'}
			rel={isExternal ? 'noreferrer' : undefined}>
			{cta.label}
		</a>
	)
}

export default function PartnerPage() {
	const { hero, who, benefits, steps, eligibility, faq, finalCta } = content

	return (
		<div className="home">
			{/* HEADER */}
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="/">MonkGames</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							<li>
								<a href="/platform">Platform</a>
							</li>
							<li>
								<a href="/solutions">Solutions</a>
							</li>
							<li>
								<a href="/games">Games</a>
							</li>
							<li>
								<a href="/marketplace">Marketplace</a>
							</li>
							<li>
								<a href="/docs">Resources</a>
							</li>
							<li>
								<a href="/partner">Become Partner</a>
							</li>
						</ul>
					</nav>

					<div className="home-header__actions">
						{renderButton(
							{
								label: 'Operator Console',
								href: '/access',
								variant: 'primary',
							},
							''
						)}
					</div>
				</div>
			</header>

			<main className="home-main">
				{/* HERO */}
				<section className="hero">
					<div className="hero__layout">
						<div>
							<p className="hero__badge">{hero.badge}</p>
							<h1 className="hero__title">{hero.title}</h1>
							<p className="hero__subtitle">{hero.subtitle}</p>

							<div className="hero__ctas">
								{hero.ctas.map(cta => renderButton(cta))}
							</div>
						</div>

						{/* small visual */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Partner Overview</p>
								<p style={deviceText}>
									Operators, platforms, and creators working
									together on modern iGaming engines powered
									by fairness and a creator-first economy.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* WHO PARTNERS */}
				<section className="section">
					<h2 className="section__title">{who.title}</h2>
					<p className="section__subtitle">{who.subtitle}</p>

					<div className="grid grid--three">
						{who.items.map(item => (
							<article key={item.title} className="card">
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
								<ul className="card__list">
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* BENEFITS */}
				<section className="section">
					<h2 className="section__title">{benefits.title}</h2>
					<p className="section__subtitle">{benefits.subtitle}</p>

					<div className="grid grid--three">
						{benefits.items.map(item => (
							<article key={item.title} className="card">
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
								<ul className="card__list">
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* HOW IT WORKS */}
				<section className="section">
					<h2 className="section__title">{steps.title}</h2>
					<p className="section__subtitle">{steps.subtitle}</p>

					<div className="grid grid--two">
						{steps.list.map(step => (
							<article key={step.title} className="card">
								<div className="card-step__label">
									{step.label}
								</div>
								<h3 className="card__title">{step.title}</h3>
								<p className="card__body">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* ELIGIBILITY */}
				<section className="section">
					<h2 className="section__title">{eligibility.title}</h2>
					<p className="section__subtitle">{eligibility.subtitle}</p>

					<ul className="card__list">
						{eligibility.points.map(p => (
							<li key={p}>{p}</li>
						))}
					</ul>
				</section>

				{/* PARTNER FORM */}
				<section className="section" id="partner-form">
					<h2 className="section__title">Partnership Request Form</h2>
					<p className="section__subtitle">
						Provide a few details — we’ll follow up with a deck, a
						call link, and sandbox access if needed.
					</p>

					<div className="section--partner">
						<aside className="lead-form-wrapper">
							<form
								className="lead-form"
								onSubmit={e => {
									e.preventDefault()
									alert(
										'Thanks! Our team will contact you shortly for partnership onboarding.'
									)
								}}>
								<div className="lead-form__row">
									<input
										type="text"
										name="name"
										placeholder="Your name"
										required
									/>
									<input
										type="email"
										name="email"
										placeholder="Work email"
										required
									/>
								</div>
								<div className="lead-form__row">
									<input
										type="text"
										name="company"
										placeholder="Company / Platform / Studio"
									/>
									<input
										type="text"
										name="role"
										placeholder="Role (Product, Ops, Tech, Founder)"
									/>
								</div>
								<textarea
									name="message"
									rows={3}
									placeholder="Tell us your markets, goals, and partnership interest."
								/>
								<button
									type="submit"
									className="btn btn-primary btn-full">
									Submit Partnership Request
								</button>
							</form>

							<p className="lead-form__footnote">
								No spam. We only use this to follow up on your
								partnership request.
							</p>
						</aside>
					</div>
				</section>

				{/* FAQ */}
				<section className="section">
					<h2 className="section__title">{faq.title}</h2>

					<div className="grid grid--two">
						{faq.items.map(item => (
							<article key={item.question} className="card">
								<h3 className="card__title">{item.question}</h3>
								<p className="card__body">{item.answer}</p>
							</article>
						))}
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="section section--final-cta">
					<h3 className="section__title">{finalCta.title}</h3>
					<p className="section__subtitle">{finalCta.subtitle}</p>
					<div className="hero__ctas">
						{renderButton(
							{
								label: 'Submit Partnership Request',
								href: '#partner-form',
								variant: 'primary',
							},
							''
						)}
						{renderButton(
							{
								label: 'Explore Platform',
								href: '/platform',
								variant: 'secondary',
							},
							''
						)}
					</div>
				</section>
			</main>
		</div>
	)
}

/** Device-style hero visual */
const deviceWrapper: CSSProperties = {
	padding: '0.9rem',
	borderRadius: 24,
	background:
		'radial-gradient(circle at top, rgba(249,115,22,0.6) 0, #111111 40%, #020617 100%)',
	boxShadow: '0 28px 80px rgba(0,0,0,0.95)',
}

const deviceHeader: CSSProperties = {
	display: 'flex',
	gap: 6,
	marginBottom: 10,
}

const deviceDot: CSSProperties = {
	width: 8,
	height: 8,
	borderRadius: '999px',
	backgroundColor: 'rgba(15,23,42,0.8)',
}

const deviceBody: CSSProperties = {
	borderRadius: 18,
	padding: '0.9rem 0.95rem 1.1rem',
	backgroundColor: 'rgba(15,15,23,0.95)',
}

const deviceTitle: CSSProperties = {
	fontSize: '0.95rem',
	fontWeight: 600,
	marginBottom: 6,
}

const deviceText: CSSProperties = {
	fontSize: '0.86rem',
	lineHeight: 1.6,
	color: '#e5e5e5',
}
