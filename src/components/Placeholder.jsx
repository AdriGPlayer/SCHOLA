export default function Placeholder({ title, description }) {
  return (
    <main className="relative pt-20 w-full min-h-screen bg-surface px-space-xl py-space-lg">
      <div className="max-w-xl mx-auto bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm items-start mt-space-xl">
        <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[28px]">construction</span>
        </div>
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
          Módulo en construcción
        </span>
        <h1 className="font-headline-md text-headline-md text-primary">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {description ||
            "Esta pantalla aún no cuenta con maqueta funcional. La navegación y el layout del subsistema ya están listos para conectarla."}
        </p>
      </div>
    </main>
  );
}
