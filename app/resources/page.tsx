// app/docs/page.tsx
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

type QuickStart = {
	title: string
	tag: string
	body: string
	bullets: string[]
	ctas: CTA[]
}

type DocLink = {
	title: string
	body: string
	href: string
	tag?: string
}

type FAQItem = {
	question: string
	answer: string
}

type ResourceContent = {
	hero: {
		badge: string
		title: string
		subtitle: string
		ctas: CTA[]
	}
	quickStarts: {
		title: string
		subtitle: string
		items: QuickStart[]
	}
	integration: {
		title: string
		subtitle: string
		items: DocLink[]
	}
	builders: {
		title: string
		subtitle: string
		items: DocLink[]
	}
	fairness: {
		title: string
		subtitle: string
		body: string
		points: string[]
	}
	support: {
		title: string
		subtitle: string
		items: DocLink[]
	}
	faq: {
		title: string
		items: FAQItem[]
	}
	finalCta: {
		title: string
		subtitle: string
		ctas: CTA[]
	}
}

const content: ResourceContent = {
	hero: {
		badge: 'Resources · Docs · Guides',
		title: 'Everything you need to integrate, build, and operate with MonkGames.',
		subtitle:
			'One place for operator integration docs, Gamdock guides, GamCore SDK references, fairness explainers, and answers for product, tech, and compliance teams.',
		ctas: [
			{
				label: 'Start as Operator',
				href: '/docs/integration',
				variant: 'primary',
			},
			{
				label: 'Start as Builder',
				href: '/docs/builders',
				variant: 'secondary',
			},
		],
	},
	quickStarts: {
		title: 'Pick your starting point',
		subtitle:
			'Resources are organized by who you are in the ecosystem — operator, platform, studio, or creator.',
		items: [
			{
				tag: 'Operators & Platforms',
				title: 'Integrate crash & instant-lotto engines',
				body: 'Get from “what is MonkGames” to “we have engines running in sandbox” with clear steps for Web2-first stacks.',
				bullets: [
					'Understand Gamdock and the engine layer.',
					'Wire MonkGames to your wallet and account systems.',
					'Test rounds, tickets, crash outcomes, and draws.',
				],
				ctas: [
					{
						label: 'Operator Integration Guide',
						href: '/docs/integration',
						variant: 'primary',
					},
				],
			},
			{
				tag: 'Builders & Studios',
				title: 'Build with GamCore SDK',
				body: 'Design themes, rituals, and experiences that wrap MonkGames engines, and get them ready for Marketplace publishing.',
				bullets: [
					'Install and set up GamCore SDK.',
					'Understand theme packaging and config.',
					'Test, iterate, and submit to Marketplace.',
				],
				ctas: [
					{
						label: 'GamCore SDK Docs',
						href: '/docs/builders',
						variant: 'primary',
					},
				],
			},
			{
				tag: 'Compliance & Product',
				title: 'Fairness, OpenRNG & controls',
				body: 'Give non-engineering teams a deep but understandable view of how outcomes, limits, and logs work in MonkGames.',
				bullets: [
					'OpenRNG model and proof surfaces.',
					'Environment separation & config history.',
					'Audit and regulator-ready documentation.',
				],
				ctas: [
					{
						label: 'Fairness & RNG Overview',
						href: '/docs/fairness',
						variant: 'primary',
					},
				],
			},
		],
	},
	integration: {
		title: 'Integration guides & references',
		subtitle:
			'Docs that take operators and platforms from first test call to stable production setups.',
		items: [
			{
				title: 'Web2 Operator Integration Guide',
				body: 'Step-by-step guide to integrating MonkGames engines into existing Web2 wallets, sessions, and bonus systems.',
				href: '/docs/integration',
				tag: 'Guide',
			},
			{
				title: 'Web3 & Hybrid Integration',
				body: 'Patterns for using MonkGames engines with Web3 settlement, optional on-chain proofs, and hybrid rails.',
				href: '/docs/integration/web3',
				tag: 'Guide',
			},
			{
				title: 'API Reference: Rounds, Tickets & Draws',
				body: 'Endpoints, request/response models, and lifecycle diagrams for crash and instant-lotto.',
				href: '/docs/api',
				tag: 'API',
			},
			{
				title: 'Webhooks: Settlements & Events',
				body: 'How MonkGames notifies your systems about outcomes, settlements, errors, and monitoring events.',
				href: '/docs/webhooks',
				tag: 'API',
			},
		],
	},
	builders: {
		title: 'For builders: GamCore SDK & Marketplace',
		subtitle:
			'Everything required to go from a creative idea to a deployable, monetizable experience on Gamdock.',
		items: [
			{
				title: 'GamCore SDK Overview',
				body: 'Concepts, architecture, and mental models behind GamCore: inputs, assets, configs, outputs.',
				href: '/docs/builders',
				tag: 'SDK',
			},
			{
				title: 'Theme & Experience Packaging',
				body: 'How to structure visuals, audio, pacing, and configuration into something Gamdock can understand.',
				href: '/docs/builders/themes',
				tag: 'SDK',
			},
			{
				title: 'Testing & Sandbox Workflow',
				body: 'Run your experiences against sandbox engines before you ever reach operators or the Marketplace.',
				href: '/docs/builders/testing',
				tag: 'Guide',
			},
			{
				title: 'Publishing & Monetization',
				body: 'What it means to publish into the MonkGames Marketplace and how revenue shares and licensing work.',
				href: '/docs/builders/publishing',
				tag: 'Marketplace',
			},
		],
	},
	fairness: {
		title: 'Fairness, OpenRNG & controls',
		subtitle:
			'MonkGames is designed to make fairness and control explainable — not just to engineers, but to product, compliance, and regulators.',
		body: 'These docs break down how our OpenRNG model works, how crash points and draws are generated, how logs are exposed, and how the Operator Console gives you the controls you need.',
		points: [
			'OpenRNG concept notes and example proofs.',
			'Crash and lotto-specific fairness flows.',
			'Environment separation and config history.',
			'Data export for labs and regulators.',
			'How to talk about MonkGames fairness with your own stakeholders.',
		],
	},
	support: {
		title: 'Support, examples & extra material',
		subtitle:
			'If you are not sure where to begin, these resources will usually get you unstuck.',
		items: [
			{
				title: 'Example integration flows',
				body: 'Walkthroughs of typical operator and platform architectures using MonkGames.',
				href: '/docs/examples',
				tag: 'Examples',
			},
			{
				title: 'Changelog & release notes',
				body: 'Track changes to engines, APIs, SDKs, and console capabilities.',
				href: '/docs/changelog',
				tag: 'Updates',
			},
			{
				title: 'Contact support',
				body: 'Reach the team directly for integration questions, roadmap alignment, or incident follow-ups.',
				href: 'mailto:support@monkgames.co',
				tag: 'Support',
			},
			{
				title: 'Partner & platform enquiries',
				body: 'If you are a larger operator, platform, or studio, talk to us about co-designing how you use MonkGames.',
				href: '/#partner',
				tag: 'Partner',
			},
		],
	},
	faq: {
		title: 'Frequently asked questions',
		items: [
			{
				question: 'Where should an operator or platform start?',
				answer: 'Begin with the Web2 Operator Integration Guide if you run a typical wallet and account stack. If you already use Web3 rails, look at the Hybrid Integration docs next.',
			},
			{
				question: 'Do I need Gamdock set up before I read these docs?',
				answer: 'No. The docs are written so you can understand the Gamdock mental model first, and then progressively dive into integration details when you are ready.',
			},
			{
				question:
					'Can builders access sandbox without an operator partner?',
				answer: 'Yes, in many cases. Builders can request GamCore SDK sandbox access to experiment and prepare themes, and later match with operators through the Marketplace or partnerships.',
			},
			{
				question: 'Are APIs stable, or will they change often?',
				answer: 'We design for stability. Changes are versioned and announced in the changelog, with deprecation timelines where necessary.',
			},
			{
				question:
					'Where do we ask about a new region, game type, or feature?',
				answer: 'Use the partner enquiry route if this is tied to a commercial opportunity, or contact support if it is a technical or roadmap question.',
			},
		],
	},
	finalCta: {
		title: 'Ready to integrate, build, or review MonkGames in detail?',
		subtitle:
			'Use these resources as a starting point. If you prefer, we can walk you and your team through them on a focused call.',
		ctas: [
			{
				label: 'Talk to the Team',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'Operator Integration Docs',
				href: '/docs/integration',
				variant: 'secondary',
			},
		],
	},
}

function renderButton(cta: CTA, extraClass = '') {
	const variant: Variant = cta.variant ?? 'primary'
	const href = cta.href ?? '#'
	const isExternal = cta.external && href.startsWith('http')
	const className = `btn btn-${variant} ${extraClass}`.trim()

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

export default function ResourcesPage() {
	const {
		hero,
		quickStarts,
		integration,
		builders,
		fairness,
		support,
		faq,
		finalCta,
	} = content

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
								<a href="/resources">Resources</a>
							</li>
						</ul>
					</nav>

					<div className="home-header__actions">
						{renderButton(
							{
								label: 'Become Partner',
								href: '/#partner',
								variant: 'secondary',
							},
							''
						)}
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

						{/* Visual: docs preview */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Docs at a glance</p>
								<p style={deviceText}>
									Operator integration guides, GamCore SDK
									references, fairness explainers, and
									examples — all kept in sync with the
									MonkGames platform.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* QUICK STARTS */}
				<section className="section">
					<h2 className="section__title">{quickStarts.title}</h2>
					<p className="section__subtitle">{quickStarts.subtitle}</p>

					<div className="grid grid--three">
						{quickStarts.items.map(item => (
							<article key={item.title} className="card">
								<span
									style={{
										display: 'inline-flex',
										padding: '0.18rem 0.55rem',
										borderRadius: 999,
										border: '1px solid var(--border-subtle)',
										fontSize: '0.78rem',
										marginBottom: '0.35rem',
									}}>
									{item.tag}
								</span>
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
								<ul className="card__list">
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
								<div className="hero__ctas">
									{item.ctas.map(cta => renderButton(cta))}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* INTEGRATION DOCS */}
				<section className="section">
					<h2 className="section__title">{integration.title}</h2>
					<p className="section__subtitle">{integration.subtitle}</p>

					<div className="grid grid--two">
						{integration.items.map(doc => (
							<article key={doc.title} className="card">
								{doc.tag && (
									<span
										style={{
											display: 'inline-flex',
											padding: '0.16rem 0.5rem',
											borderRadius: 999,
											border: '1px solid var(--border-subtle)',
											fontSize: '0.76rem',
											marginBottom: '0.35rem',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
										}}>
										{doc.tag}
									</span>
								)}
								<h3 className="card__title">{doc.title}</h3>
								<p className="card__body">{doc.body}</p>
								<a href={doc.href} className="link-inline">
									Open doc →
								</a>
							</article>
						))}
					</div>
				</section>

				{/* BUILDERS DOCS */}
				<section className="section">
					<h2 className="section__title">{builders.title}</h2>
					<p className="section__subtitle">{builders.subtitle}</p>

					<div className="grid grid--two">
						{builders.items.map(doc => (
							<article key={doc.title} className="card">
								{doc.tag && (
									<span
										style={{
											display: 'inline-flex',
											padding: '0.16rem 0.5rem',
											borderRadius: 999,
											border: '1px solid var(--border-subtle)',
											fontSize: '0.76rem',
											marginBottom: '0.35rem',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
										}}>
										{doc.tag}
									</span>
								)}
								<h3 className="card__title">{doc.title}</h3>
								<p className="card__body">{doc.body}</p>
								<a href={doc.href} className="link-inline">
									Open doc →
								</a>
							</article>
						))}
					</div>
				</section>

				{/* FAIRNESS / RNG */}
				<section className="section">
					<h2 className="section__title">{fairness.title}</h2>
					<p className="section__subtitle">{fairness.subtitle}</p>
					<p className="section__subtitle">{fairness.body}</p>

					<ul className="card__list">
						{fairness.points.map(p => (
							<li key={p}>{p}</li>
						))}
					</ul>
				</section>

				{/* SUPPORT & EXTRAS */}
				<section className="section">
					<h2 className="section__title">{support.title}</h2>
					<p className="section__subtitle">{support.subtitle}</p>

					<div className="grid grid--two">
						{support.items.map(doc => (
							<article key={doc.title} className="card">
								{doc.tag && (
									<span
										style={{
											display: 'inline-flex',
											padding: '0.16rem 0.5rem',
											borderRadius: 999,
											border: '1px solid var(--border-subtle)',
											fontSize: '0.76rem',
											marginBottom: '0.35rem',
											textTransform: 'uppercase',
											letterSpacing: '0.07em',
										}}>
										{doc.tag}
									</span>
								)}
								<h3 className="card__title">{doc.title}</h3>
								<p className="card__body">{doc.body}</p>
								<a href={doc.href} className="link-inline">
									Open →
								</a>
							</article>
						))}
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
						{finalCta.ctas.map(cta => renderButton(cta))}
					</div>
				</section>
			</main>
		</div>
	)
}

/** Visual block for hero */
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
