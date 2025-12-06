// app/page.tsx
'use client'
import type { CSSProperties } from 'react'
import homeContent from '../content/homeContent.json'
import principlesData from '../content/principles.json'
import './styles/Home.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type CTA = {
	label: string
	href?: string
	variant?: Variant
}

type HeaderNavLink = {
	label: string
	href: string
}

type Header = {
	brand: string
	logo?: string
	navLinks: HeaderNavLink[]
	actions: CTA[]
}

type Hero = {
	title: string
	subtitle: string
	badge?: string
	heroImage?: string
	ctas: CTA[]
}

type WhyPlayCard = {
	title: string
	body: string
	image?: string
}

type HowStep = {
	label: string
	title: string
	body: string
	image?: string
}

type FlagshipGame = {
	id: string
	title: string
	description: string
	thumbnail?: string
	points: string[]
	primaryCta: CTA
	secondaryCta?: CTA
}

type MarketplaceBlock = {
	title: string
	body: string
	image?: string
	points: string[]
	cta?: CTA
}

type Stat = {
	label: string
	value: string
}

type Testimonial = {
	quote: string
	author: string
	avatar?: string
}

type Community = {
	title: string
	subtitle: string
	image?: string
	ctas: CTA[]
}

type PartnerBlock = {
	title: string
	body: string
	image?: string
	points: string[]
	cta?: CTA
}

type PartnerSection = {
	title: string
	subtitle: string
	blocks: PartnerBlock[]
}

type FooterLink = {
	label: string
	href: string
	external?: boolean
}

type FooterGroup = {
	title: string
	links: FooterLink[]
}

type Footer = {
	brand: string
	logo?: string
	tagline: string
	badges: string[]
	bottomLine: string
	social: FooterLink[]
	linkGroups: FooterGroup[]
}

type Audiences = {
	title: string
	items: string[]
}

type HomeContent = {
	header: Header
	hero: Hero
	valueStripBadges: string[]
	audiences: Audiences
	whyPlay: {
		title: string
		cards: WhyPlayCard[]
	}
	howItWorks: {
		title: string
		subtitle: string
		steps: HowStep[]
	}
	flagship: {
		title: string
		subtitle: string
		games: FlagshipGame[]
	}
	marketplace: {
		title: string
		subtitle: string
		blocks: MarketplaceBlock[]
	}
	socialProof: {
		title: string
		stats: Stat[]
		testimonials: Testimonial[]
	}
	community: Community
	partner: PartnerSection
	finalCta: {
		title: string
		subtitle: string
		backgroundImage?: string
		ctas: CTA[]
	}
	footer: Footer
}

type PrincipleMeta = {
	title: string
	subtitle: string
	badges: string[]
}

type PrincipleItem = {
	id: string
	title: string
	intro: string
	body: string
	highlights: string[]
	details: string
	traceabilityTitle: string
	traceabilityItems: { label: string; description: string }[]
	closing: string
}

type PrinciplesData = {
	meta: PrincipleMeta
	principles: PrincipleItem[]
}

const content = homeContent as HomeContent
const principles = principlesData as PrinciplesData

function renderButton(cta: CTA, extraClass = '') {
	const variant = cta.variant ?? 'primary'
	const className = `btn btn-${variant} ${extraClass}`.trim()
	const href = cta.href ?? '#'

	return (
		<a key={cta.label} href={href} className={className}>
			{cta.label}
		</a>
	)
}

export default function Home() {
	const {
		header,
		hero,
		valueStripBadges,
		audiences,
		whyPlay,
		howItWorks,
		flagship,
		marketplace,
		socialProof,
		community,
		partner,
		finalCta,
		footer,
	} = content

	return (
		<div className="home">
			{/* HEADER */}
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="#top">{header.brand}</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							{header.navLinks.map(link => (
								<li key={link.href}>
									<a href={link.href}>{link.label}</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="home-header__actions">
						{header.actions.map(cta => renderButton(cta))}
					</div>
				</div>
			</header>

			<main className="home-main" id="top">
				{/* HERO */}
				<section className="hero">
					<div className="hero__layout">
						<div className="hero__content">
							<h1 className="hero__title">{hero.title}</h1>
							<p className="hero__subtitle">{hero.subtitle}</p>

							<div className="hero__ctas">
								{hero.ctas.map(cta => renderButton(cta))}
							</div>

							{hero.badge && (
								<p className="hero__badge">{hero.badge}</p>
							)}

							{valueStripBadges?.length > 0 && (
								<div className="value-strip">
									{valueStripBadges.map(badge => (
										<span
											key={badge}
											className="value-strip__badge">
											{badge}
										</span>
									))}
								</div>
							)}
						</div>

						{hero.heroImage && (
							<div className="hero__visual">
								<img
									src={hero.heroImage}
									alt="Preview of MonkGames experiences"
								/>
							</div>
						)}
					</div>
				</section>

				{/* WHO THIS IS FOR / SOLUTIONS */}
				<section className="section section--audiences" id="solutions">
					<h3 className="section__title">{audiences.title}</h3>
					<p className="section__subtitle">
						MonkGames is built for real-money game ecosystems that
						need both provable fairness and cultural specificity.
					</p>
					<div className="audiences">
						{audiences.items.map(item => (
							<span key={item} className="audiences__chip">
								{item}
							</span>
						))}
					</div>
				</section>

				{/* WHY PLAY */}
				<section className="section" id="why">
					<h3 className="section__title">{whyPlay.title}</h3>
					<div className="grid grid--three">
						{whyPlay.cards.map(card => (
							<article
								className="card card--why"
								key={card.title}>
								{card.image && (
									<div className="card__media">
										<img
											src={card.image}
											alt={card.title}
										/>
									</div>
								)}
								<h4 className="card__title">{card.title}</h4>
								<p className="card__body">{card.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* HOW IT WORKS */}
				<section className="section" id="how">
					<h3 className="section__title">{howItWorks.title}</h3>
					<p className="section__subtitle">{howItWorks.subtitle}</p>

					<div className="grid grid--three">
						{howItWorks.steps.map(step => (
							<article
								className="card card--step"
								key={step.label}>
								<div className="card-step__label">
									{step.label}
								</div>
								{step.image && (
									<div className="card__media card__media--step">
										<img
											src={step.image}
											alt={step.title}
										/>
									</div>
								)}
								<h4 className="card__title">{step.title}</h4>
								<p className="card__body">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* FLAGSHIP GAMES */}
				<section className="section" id="games">
					<h3 className="section__title">{flagship.title}</h3>
					<p className="section__subtitle">{flagship.subtitle}</p>

					<div className="grid grid--two">
						{flagship.games.map(game => (
							<article className="card card--game" key={game.id}>
								{game.thumbnail && (
									<div className="card__media card__media--game">
										<img
											src={game.thumbnail}
											alt={game.title}
										/>
									</div>
								)}
								<h4 className="card__title">{game.title}</h4>
								<p className="card__body">{game.description}</p>
								<ul className="card__list">
									{game.points.map(p => (
										<li key={p}>{p}</li>
									))}
								</ul>
								<div className="card__actions">
									{renderButton(game.primaryCta)}
									{game.secondaryCta &&
										renderButton(
											game.secondaryCta,
											'btn-ghost'
										)}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* THEME MARKETPLACE & CUSTOM STUDIO */}
				<section className="section" id="themes">
					<h3 className="section__title">{marketplace.title}</h3>
					<p className="section__subtitle">{marketplace.subtitle}</p>

					<div className="grid grid--two marketplace">
						{marketplace.blocks.map(block => (
							<article
								className="card card--marketplace"
								key={block.title}>
								{block.image && (
									<div className="card__media card__media--marketplace">
										<img
											src={block.image}
											alt={block.title}
										/>
									</div>
								)}
								<h4 className="card__title">{block.title}</h4>
								<p className="card__body">{block.body}</p>
								<ul className="card__list">
									{block.points.map(p => (
										<li key={p}>{p}</li>
									))}
								</ul>
								{block.cta && (
									<div className="card__actions">
										{renderButton(block.cta)}
									</div>
								)}
							</article>
						))}
					</div>
				</section>

				{/* PRINCIPLES / TECHNOLOGY */}
				<section
					className="section section--principles"
					id="technology">
					<div className="principles__header">
						<div>
							<h3 className="section__title">
								{principles.meta.title}
							</h3>
							<p className="section__subtitle">
								{principles.meta.subtitle}
							</p>
						</div>
						<div className="principles__badges">
							{principles.meta.badges.map(badge => (
								<span key={badge} className="principles__badge">
									{badge}
								</span>
							))}
						</div>
					</div>

					<div className="grid grid--two principles__grid">
						{principles.principles.map((p, index) => (
							<article
								className="card card--principle"
								key={p.id}>
								<div className="card-principle__header">
									<span className="card-principle__pill">
										{index === 0
											? 'Principle 01'
											: 'Principle 02'}
									</span>
									<h4 className="card__title">{p.title}</h4>
								</div>

								<div className="card-principle__grid">
									{/* LEFT: CORE + HIGHLIGHTS */}
									<div className="card-principle__main">
										<p className="card-principle__intro">
											{p.intro}
										</p>
										<p className="card__body">{p.body}</p>

										<div className="card-principle__group">
											<span className="card-principle__label">
												Key Highlights
											</span>
											<ul className="card-principle__highlights">
												{p.highlights.map(h => (
													<li key={h}>{h}</li>
												))}
											</ul>
										</div>
									</div>

									{/* RIGHT: TRACEABILITY / OWNERSHIP */}
									<aside className="card-principle__aside">
										<span className="card-principle__label">
											{p.traceabilityTitle}
										</span>
										<ul className="card-principle__trace">
											{p.traceabilityItems.map(item => (
												<li key={item.label}>
													<strong>
														{item.label}
													</strong>
													<span>
														{item.description}
													</span>
												</li>
											))}
										</ul>
									</aside>
								</div>

								<p className="card-principle__closing">
									{p.closing}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* SOCIAL PROOF & COMMUNITY */}
				<section className="section" id="resources">
					<h3 className="section__title">{socialProof.title}</h3>

					<div className="stats-row">
						{socialProof.stats.map(stat => (
							<div className="stat" key={stat.label}>
								<span className="stat__value">
									{stat.value}
								</span>
								<span className="stat__label">
									{stat.label}
								</span>
							</div>
						))}
					</div>

					<div className="testimonials">
						<div className="grid grid--three">
							{socialProof.testimonials.map(t => (
								<figure className="testimonial" key={t.author}>
									{t.avatar && (
										<div className="testimonial__avatar">
											<img
												src={t.avatar}
												alt={t.author}
											/>
										</div>
									)}
									<blockquote>“{t.quote}”</blockquote>
									<figcaption>— {t.author}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</section>

				<section className="section section--community">
					<h3 className="section__title">{community.title}</h3>
					<p className="section__subtitle">{community.subtitle}</p>
					<div className="community">
						{community.image && (
							<div className="community__media">
								<img
									src={community.image}
									alt="MonkGames community"
								/>
							</div>
						)}
						<div className="community__actions">
							{community.ctas.map(cta => renderButton(cta))}
						</div>
					</div>
				</section>

				{/* PARTNER / OPERATOR + LEAD FORM */}
				<section className="section section--partner" id="partner">
					<h3 className="section__title">{partner.title}</h3>
					<p className="section__subtitle">{partner.subtitle}</p>

					<div className="partner-layout">
						<div className="grid grid--two partner-layout__blocks">
							{partner.blocks.map(block => (
								<article
									className="card card--partner"
									key={block.title}>
									{block.image && (
										<div className="card__media">
											<img
												src={block.image}
												alt={block.title}
											/>
										</div>
									)}
									<h4 className="card__title">
										{block.title}
									</h4>
									<p className="card__body">{block.body}</p>
									<ul className="card__list">
										{block.points.map(p => (
											<li key={p}>{p}</li>
										))}
									</ul>
									{block.cta && (
										<div className="card__actions">
											{renderButton(block.cta)}
										</div>
									)}
								</article>
							))}
						</div>

						<aside className="lead-form-wrapper">
							<h4 className="lead-form__title">
								Book a Partner Call 📅
							</h4>
							<p className="lead-form__subtitle">
								Tell us a bit about your platform and target
								regions. We’ll follow up with a short deck and a
								demo slot.
							</p>
							<form
								className="lead-form"
								onSubmit={e => {
									e.preventDefault()
								}}>
								<div className="lead-form__row">
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										required
									/>
									<input
										type="email"
										name="email"
										placeholder="Work Email"
										required
									/>
								</div>
								<div className="lead-form__row">
									<input
										type="text"
										name="company"
										placeholder="Company / Brand"
										required
									/>
									<input
										type="text"
										name="role"
										placeholder="Role (e.g., Product Lead)"
									/>
								</div>
								<div className="lead-form__row">
									<input
										type="text"
										name="region"
										placeholder="Primary Market / Region"
									/>
									<input
										type="url"
										name="website"
										placeholder="Casino / Platform URL"
									/>
								</div>
								<textarea
									name="notes"
									placeholder="What are you hoping to achieve with MonkGames?"
									rows={3}
								/>
								<button
									type="submit"
									className="btn btn-primary btn-full">
									Submit Interest
								</button>
							</form>
							<p className="lead-form__footnote">
								No spam. We only use this info to respond to
								your enquiry.
							</p>
						</aside>
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

			{/* FOOTER */}
			<footer className="footer" id="company">
				<div className="footer__top">
					<div className="footer__brand">
						<div className="footer__brand-name">{footer.brand}</div>
						<p className="footer__text">{footer.tagline}</p>
						<div className="footer__badges">
							{footer.badges.map(badge => (
								<span key={badge} className="footer__badge">
									{badge}
								</span>
							))}
						</div>
					</div>
					<div className="footer__columns">
						{footer.linkGroups.map(group => (
							<div key={group.title}>
								<h4 className="footer__heading">
									{group.title}
								</h4>
								<ul className="footer__list">
									{group.links.map(link => (
										<li key={link.label}>
											<a
												href={link.href}
												target={
													link.external
														? '_blank'
														: '_self'
												}
												rel={
													link.external
														? 'noreferrer'
														: undefined
												}>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__bottom-left">
						<span>{footer.bottomLine}</span>
					</div>
					<div className="footer__social">
						{footer.social.map(link => (
							<a
								key={link.label}
								href={link.href}
								className="footer__social-link"
								target="_blank"
								rel="noreferrer">
								{link.label}
							</a>
						))}
					</div>
				</div>
			</footer>
		</div>
	)
}
