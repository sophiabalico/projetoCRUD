import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Página não encontrada 😢</h1>
      <p className="mt-4 text-lg text-gray-600">
        O conteúdo que você está procurando não existe ou foi removido.
      </p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Voltar à Home
      </Link>
    </div>
  );
}