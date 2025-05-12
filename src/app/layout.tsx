import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Curso LDB - Lei de Diretrizes e Bases da Educação',
  description: 'Domine a LDB e garanta sua aprovação em concursos públicos com nosso curso especializado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
} 