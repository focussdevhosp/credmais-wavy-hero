import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
        Credmais
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Reiniciando o projeto do zero.
      </p>
    </div>
  )
}
