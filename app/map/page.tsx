import { Header } from '@/components/Header'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Карта',
  description:
    'LEAF CITY - интерактивная карта игрового сервера. Узнайте о расположении всех построек и территорий нашего сервера на удобной и интуитивно понятной карте. Этот инструмент особенно полезен для новичков, которые только что присоединились к нашему сообществу, а также для опытных игроков, которые хотят планировать свои будущие строительные проекты. Наша интерактивная карта поможет вам легко найти и изучить окружающие здания и их взаимное расположение, предоставляя полезную информацию для вашей игровой эффективности. Исследуйте мир LEAF CITY с помощью нашей карты и раскройте свой потенциал в игре!',
  openGraph: {
    description:
      'LEAF CITY - интерактивная карта игрового сервера. Узнайте о расположении всех построек и территорий нашего сервера на удобной и интуитивно понятной карте. Этот инструмент особенно полезен для новичков, которые только что присоединились к нашему сообществу, а также для опытных игроков, которые хотят планировать свои будущие строительные проекты. Наша интерактивная карта поможет вам легко найти и изучить окружающие здания и их взаимное расположение, предоставляя полезную информацию для вашей игровой эффективности. Исследуйте мир LEAF CITY с помощью нашей карты и раскройте свой потенциал в игре!'
  }
}

export default function MapPage() {
  return (
    <section className="flex h-screen w-screen flex-col overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl px-4 pt-4 lg:px-8">
        <Header />
      </div>
      <div className="flex-1 overflow-hidden">
        <iframe
          src="http://194.147.90.247:83/#minecraft_overworld;flat;-117,64,-18;3"
          className="h-[calc(100dvh-72px)] w-full border-0 sm:h-full"
          title="Map"
        />
      </div>
    </section>
  )
}
