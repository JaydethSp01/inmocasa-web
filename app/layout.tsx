export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/agentes", label: "Agentes" }, { href: "/clientes", label: "Clientes" }, { href: "/contratos", label: "Contratos" }, { href: "/propiedades", label: "Propiedades" }, { href: "/visitas", label: "Visitas" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Inmobiliaria", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Inmobiliaria">{children}</ProtectedShell>
      </body>
    </html>
  );
}
