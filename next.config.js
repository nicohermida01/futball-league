/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['crests.football-data.org', 'upload.wikimedia.org'],
	},
}

module.exports = nextConfig
