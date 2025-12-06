// src/pages/Home.tsx
import type { FC } from 'react'
import homeContent from '../content/homeContent.json'
import principlesData from '../content/principles.json'
import './Home.css'

type CTA = {
	label: string
	href?: string
	// relaxed to string so JSON "variant": "primary" etc. is valid
	variant?: string
}

type Stat = {
	label: string
	value: string
}

type Testimonial = {
	quote: string
	author: string
}

type Step = {
	label: string
	title: string
	body: string
}

type Game = {
	id: string
	title: string
	description: string
	points: string[]
	primaryCta: CTA
	secondaryCta?: CTA
}

type ThemeBlock = {
	title: string
	body: string
	points: string[]
	cta: CTA
}

type PartnerBlock = {
	title: string
	body: string
	points: string[]
	cta: CTA
}

type Principle = {
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

type LinkGroup = {
	title: string
	links: { label: string; href: string; external?: boolean }[]
}

const Home: FC = () => {
	const {
		header,
		hero,
		valueStripBadges,
		whyPlay,
		howItWorks,
		flagship,
		marketplace,
		socialProof,
		community,
		partner,
		finalCta,
		footer,
	} = homeContent as any

	const principles = principlesData.principles as Principle[]

	const renderButton = (cta: CTA) => {
		if (!cta?.label) return null

		let className = 'btn btn-primary'
		if (cta.variant === 'secondary') className = 'btn btn-secondary'
		else if (cta.variant === 'ghost') className = 'btn btn-ghost'

		if (cta.href) {
			const isExternal = cta.href.startsWith('http')
			return (
				<a
					key={cta.href}
					className={className}
					href={cta.href}
					target={isExternal ? '_blank' : undefined}
					rel={isExternal ? 'noreferrer' : undefined}>
					{cta.label}
				</a>
			)
		}

		return <button className={className}>{cta.label}</button>
	}

	return (
		<div className="home">
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="/">{header.brand}</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							{header.navLinks.map((link: any) => (
								<li key={link.href}>
									<a href={link.href}>{link.label}</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="home-header__actions">
						{header.actions.map((action: CTA) =>
							renderButton(action)
						)}
					</div>
				</div>
			</header>

			<main className="home-main">
				{/* HERO */}
				<section className="hero">
					<div className="hero__content">
						<h2 className="hero__title">{hero.title}</h2>
						<p className="hero__subtitle">{hero.subtitle}</p>
						<div className="hero__ctas">
							{hero.ctas.map((cta: CTA) => renderButton(cta))}
						</div>
						<p className="hero__badge">{hero.badge}</p>
					</div>
				</section>

				{/* VALUE STRIP */}
				<section className="section">
					<div className="value-strip">
						{valueStripBadges.map((label: string) => (
							<span key={label} className="value-strip__badge">
								{label}
							</span>
						))}
					</div>
				</section>

				{/* WHY PLAY */}
				<section className="section">
					<h3 className="section__title">{whyPlay.title}</h3>
					<div className="grid grid--three">
						{whyPlay.cards.map((card: any) => (
							<article key={card.title} className="card">
								<h4 className="card__title">{card.title}</h4>
								<p className="card__body">{card.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* HOW IT WORKS */}
				<section className="section">
					<h3 className="section__title">{howItWorks.title}</h3>
					<p className="section__subtitle">{howItWorks.subtitle}</p>
					<div className="grid grid--three">
						{howItWorks.steps.map((step: Step) => (
							<article
								key={step.label}
								className="card card--step">
								<div className="card-step__label">
									{step.label}
								</div>
								<h4 className="card__title">{step.title}</h4>
								<p className="card__body">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* FLAGSHIP GAMES */}
				<section className="section">
					<h3 className="section__title">{flagship.title}</h3>
					<p className="section__subtitle">{flagship.subtitle}</p>
					<div className="grid grid--two">
						{flagship.games.map((game: Game) => (
							<article key={game.id} className="card">
								<h4 className="card__title">{game.title}</h4>
								<p className="card__body">{game.description}</p>
								<ul className="card__list">
									{game.points.map(point => (
										<li key={point}>{point}</li>
									))}
								</ul>
								<div className="card__actions">
									{renderButton(game.primaryCta)}
									{game.secondaryCta &&
										renderButton(game.secondaryCta)}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* THEME MARKETPLACE */}
				<section className="section">
					<h3 className="section__title">{marketplace.title}</h3>
					<p className="section__subtitle">{marketplace.subtitle}</p>
					<div className="grid grid--two">
						{marketplace.blocks.map((block: ThemeBlock) => (
							<article key={block.title} className="card">
								<h4 className="card__title">{block.title}</h4>
								<p className="card__body">{block.body}</p>
								<ul className="card__list">
									{block.points.map(point => (
										<li key={point}>{point}</li>
									))}
								</ul>
								<div className="card__actions">
									{renderButton(block.cta)}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* SOCIAL PROOF */}
				<section className="section">
					<h3 className="section__title">{socialProof.title}</h3>
					<div className="stats-row">
						{socialProof.stats.map((stat: Stat) => (
							<div key={stat.label} className="stat">
								<strong className="stat__value">
									{stat.value}
								</strong>
								<span className="stat__label">
									{stat.label}
								</span>
							</div>
						))}
					</div>
					<div className="grid grid--three testimonials">
						{socialProof.testimonials.map(
							(t: Testimonial, idx: number) => (
								<blockquote key={idx} className="testimonial">
									<p>“{t.quote}”</p>
									<footer>— {t.author}</footer>
								</blockquote>
							)
						)}
					</div>
				</section>

				{/* COMMUNITY */}
				<section className="section">
					<h3 className="section__title">{community.title}</h3>
					<p className="section__subtitle">{community.subtitle}</p>
					<div className="hero__ctas">
						{community.ctas.map((cta: CTA) => renderButton(cta))}
					</div>
				</section>

				{/* PARTNER / OPERATOR */}
				<section className="section">
					<h3 className="section__title">{partner.title}</h3>
					<p className="section__subtitle">{partner.subtitle}</p>
					<div className="grid grid--two">
						{partner.blocks.map((block: PartnerBlock) => (
							<article key={block.title} className="card">
								<h4 className="card__title">{block.title}</h4>
								<p className="card__body">{block.body}</p>
								<ul className="card__list">
									{block.points.map(point => (
										<li key={point}>{point}</li>
									))}
								</ul>
								<div className="card__actions">
									{renderButton(block.cta)}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* PRINCIPLES */}
				<section className="section section--principles">
					<div className="principles__header">
						<div>
							<h3 className="section__title">
								{principlesData.meta.title}
							</h3>
							<p className="section__subtitle">
								{principlesData.meta.subtitle}
							</p>
						</div>
						<div className="principles__badges">
							{principlesData.meta.badges.map((badge: string) => (
								<span key={badge} className="principles__badge">
									{badge}
								</span>
							))}
						</div>
					</div>

					<div className="grid grid--two">
						{principles.map((p, idx) => (
							<article
								key={p.id}
								className="card card--principle">
								<div className="card-principle__header">
									<span className="card-principle__pill">
										Principle{' '}
										{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
									</span>
									<h4 className="card__title">{p.title}</h4>
								</div>

								<div className="card-principle__body">
									<p className="card__body">{p.intro}</p>
									<p className="card__body">{p.body}</p>

									<ul className="card__list">
										{p.highlights.map(h => (
											<li key={h}>
												<strong>{h}</strong>
											</li>
										))}
									</ul>

									<p className="card__body">{p.details}</p>

									<h5 className="card__subheading">
										{p.traceabilityTitle}
									</h5>
									<ul className="card__list">
										{p.traceabilityItems.map(item => (
											<li key={item.label}>
												<strong>{item.label}</strong> —{' '}
												{item.description}
											</li>
										))}
									</ul>

									<p className="card__body">{p.closing}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="section section--final-cta">
					<h3 className="section__title">{finalCta.title}</h3>
					<p className="section__subtitle">{finalCta.subtitle}</p>
					<div className="hero__ctas">
						{finalCta.ctas.map((cta: CTA) => renderButton(cta))}
					</div>
				</section>
			</main>

			{/* FOOTER */}
			<footer className="footer">
				<div className="footer__top">
					<div className="footer__brand">
						<h2>{footer.brand}</h2>
						<p className="footer__text">{footer.tagline}</p>
						<div className="footer__badges">
							{footer.badges.map((badge: string) => (
								<span key={badge} className="footer__badge">
									{badge}
								</span>
							))}
						</div>
					</div>

					<div className="footer__columns">
						{footer.linkGroups.map((group: LinkGroup) => (
							<div key={group.title} className="footer__column">
								<h4 className="footer__heading">
									{group.title}
								</h4>
								<ul className="footer__list">
									{group.links.map(link => (
										<li key={link.href}>
											<a
												href={link.href}
												target={
													link.external
														? '_blank'
														: undefined
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
						<span>
							© {new Date().getFullYear()} MonkGames Studio. All
							rights reserved.
						</span>
						<span>{footer.bottomLine}</span>
					</div>
					<div className="footer__social">
						{footer.social.map((s: any) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noreferrer"
								className="footer__social-link">
								{s.label}
							</a>
						))}
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Home
