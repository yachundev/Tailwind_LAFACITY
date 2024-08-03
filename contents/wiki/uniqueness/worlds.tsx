import { getLastUpdateDate } from '@/helpers/getLastUpdateDate'

const updateDate = '3 Aug 2024'

export default function Worlds() {
  const lastUpdateDate = getLastUpdateDate(updateDate)
  return (
    <>
      <h1 className="text-xl font-bold">Миры</h1>
      <p className="mt-4">
        На нашем сервере доступно несколько миров с различными правилами и возможностями. Это
        руководство поможет тебе понять, как использовать каждый мир и какие действия в них
        разрешены.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="мир-выживания">
        Мир выживания
      </h2>
      <p className="mt-4">
        Основной мир, где вы строите выживаете, общаетесь и находите приключения. Тут вы можете
        делать почти всё, кроме строительства крупных ферм и разрушения ландшафта для добычи
        ресурсов. Очень оптимизирован для удержания большого количества игроков.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="мир-ферм">
        Мир ферм
      </h2>
      <p className="mt-4">
        Мир, в котором спавн мобов максимально приближён к ванильному (может даже лучше).
        Предназначен для крупного фарма ресурсов на мобах. Можно жить.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="мир-ресурсов">
        Мир ресурсов
      </h2>
      <p className="mt-4">
        Мир, который обнуляется каждый месяц. Ломайте всё что видите, добывайте всё для своего
        основного мира. Главное не жить в нём.
      </p>

      <h2 className="mt-8 text-lg font-bold" id="как-попасть-на-другие-миры">
        Как попасть на другие миры
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1.</span> Выбери нужный мир
        </li>
        <li>
          <span className="text-white/50">2.</span> Напиши{' '}
          <span className="rounded bg-purple/20 px-2 py-1">/server сервер</span> чтобы переключить
          необходимый мир.
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold" id="важно">
        Важно
      </h2>
      <h3 className="mt-8 text-lg font-bold" id="кратко-о-правилах">
        Кратко о правилах
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <span className="text-white/50">1.</span> Жить можно только в мире выживания и ферм.
        </li>
        <li>
          <span className="text-white/50">2.</span> Строить трейд-холы можно только в мире
          выживания.
        </li>
        <li>
          <span className="text-white/50">3.</span> Строить крупные фермы можно только в мире ферм.
        </li>
      </ul>

      <h3 className="mt-8 text-lg font-bold" id="крупные-фермы">
        Крупные фермы
      </h3>
      <p className="mb-8 mt-4">
        Используют спавн-рейт сервера. Используют механику спавна от игрока (например: ферма
        тотемов). Используют более 10 единиц редстоун механизмов (например: воронки, наблюдатели,
        поршни и т.д.).
      </p>

      <small className="text-sm text-white/50">{lastUpdateDate}</small>
    </>
  )
}
