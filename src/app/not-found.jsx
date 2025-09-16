import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 relative z-[1] gap-7">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#f0f4f8,#d9e8fc),url('/images/mapa-mundi.png')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="text-[5rem] mb-6 animate-bounce select-none z-[1]">🌍✈️</div>
      <h1 className="text-[3rem] font-extrabold text-center text-[#177ebe] z-[1]">
        Ops...Destino não encontrado!
      </h1>
      <p className="text-[1.125rem] text-[#444] text-center max-w-xl z-[1]">
        Parece que você se perdeu na viagem...<br />
        Esse país não faz parte do nosso mapa. Mas não se preocupe, há muitos outros destinos para explorar!
      </p>
      <div className="flex gap-8 z-[1]">
        <Link
          href="/"
          className="inline-flex items-center gap-[0.7em] px-[48px] py-[38px] border-none rounded-[14px] bg-[linear-gradient(90deg,#011c40,#26658c)] text-white text-[1.15rem] font-bold tracking-[0.5px] shadow-[0_4px_16px_rgba(0,112,243,0.15)] cursor-pointer transition-[background,transform,box-shadow] duration-300 outline-none no-underline mx-3 hover:bg-[#09437d] hover:shadow-[0_6px_24px_rgba(0,112,243,0.18)] hover:-translate-y-0.5 hover:scale-[1.04] active:scale-[0.97] active:shadow-[0_2px_8px_rgba(0,112,243,0.10)]"
        >
          🌐 Voltar à Home
        </Link>
        <Link
          href="/paises"
          className="inline-flex items-center gap-[0.7em] px-[48px] py-[38px] border-none rounded-[14px] bg-[linear-gradient(90deg,#011c40,#26658c)] text-white text-[1.15rem] font-bold tracking-[0.5px] shadow-[0_4px_16px_rgba(0,112,243,0.15)] cursor-pointer transition-[background,transform,box-shadow] duration-300 outline-none no-underline mx-3 hover:bg-[#09437d] hover:shadow-[0_6px_24px_rgba(0,112,243,0.18)] hover:-translate-y-0.5 hover:scale-[1.04] active:scale-[0.97] active:shadow-[0_2px_8px_rgba(0,112,243,0.10)]"
        >
          🗺️ Explorar Países
        </Link>
      </div>
    </div>
  );
}