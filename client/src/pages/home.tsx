import { Link } from "wouter";

export default function Home() {
  return (
    // Use `h-full` instead of `min-h-screen` and remove the large bottom
    // padding. This prevents the content from becoming taller than the
    // available mobile frame and makes sure the bottom navigation is visible
    // without any extra scrolling.
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-[#388E3C] px-6 pt-6 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/90 flex items-center justify-center overflow-hidden">
            <img
              src="/Logo.png"
              alt="Pele Segura"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Pele Segura
          </h1>
        </div>

        <div className="mt-4 text-white">
          <p className="text-lg font-bold">Olá, cuidador(a)!</p>
          <p className="mt-1 text-sm font-semibold leading-relaxed max-w-[320px]">
            Estamos aqui para ajudar você a cuidar com segurança e carinho.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 px-6 pt-6 flex items-start justify-center">
        <div className="grid grid-cols-2 gap-5 w-full max-w-[360px]">
          {/* Card 1 */}
          <Link href="/rights">
            <a className="bg-[#E8F5E9] rounded-3xl shadow-sm border border-black/5 p-5 flex flex-col items-center justify-center h-36 active:scale-[0.99] transition">
              <img
                src="/Direitos e deveres.png"
                alt="Direitos e deveres do(a) cuidador(a)"
                className="h-12 w-15 opacity-80"
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#2E7D32] leading-snug">
                Direitos e deveres do(a) cuidador(a)
              </p>
            </a>
          </Link>

          {/* Card 2 */}
          <Link href="/injuries">
            <a className="bg-[#A7D8B4] rounded-3xl shadow-sm border border-black/5 p-5 flex flex-col items-center justify-center h-36 active:scale-[0.99] transition">
              <img
                src="/Lesao_icon.png"
                alt="Lesões por Pressão"
                className="h-12 w-12 opacity-80"
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#2E7D32] leading-snug">
                Lesões por Pressão
              </p>
            </a>
          </Link>

          {/* Card 3 */}
          <Link href="/prevention">
            <a className="bg-[#A7D8B4] rounded-3xl shadow-sm border border-black/5 p-5 flex flex-col items-center justify-center h-36 active:scale-[0.99] transition">
              <img
                src="/Com_prevenir.png"
                alt="Como Prevenir?"
                className="h-12 w-12 opacity-80"
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#2E7D32] leading-snug">
                Como <br /> Prevenir?
              </p>
            </a>
          </Link>

          {/* Card 4 */}
          <Link href="/alarms">
            <a className="bg-[#E8F5E9] rounded-3xl shadow-sm border border-black/5 p-5 flex flex-col items-center justify-center h-36 active:scale-[0.99] transition">
              <img
                src="/Alarmes.png"
                alt="Alarmes e lembretes"
                className="h-12 w-12 opacity-80"
              />
              <p className="mt-3 text-center text-sm font-semibold text-[#2E7D32] leading-snug">
                Alarmes e lembretes
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
