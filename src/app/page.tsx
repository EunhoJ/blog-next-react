import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1 className={clsx(
        'text-xl',
        'font-bold',
        'hover:text-blue-50',
        'hover:bg-blue-500',
        'transition',
        'duration-1000',
        'text-blog'
      )}>
        Texto no meu h1
      </h1>
    </div>
  )
}
