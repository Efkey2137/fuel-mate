import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fuel Mate',
    short_name: 'Fuel Mate',
    description: 'Fuel Mate is a web app that helps you split fuel costs with your friends.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/next-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/next-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}