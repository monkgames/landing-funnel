import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const Font = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'MonkGames',
	description: 'MonkGames Landing Funnel',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${Font.variable}  antialiased`}>{children}</body>
		</html>
	)
}
