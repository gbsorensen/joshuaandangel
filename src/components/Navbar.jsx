import { navigation } from "../config/navigation";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#F8F2EC]/90 backdrop-blur-md border-b border-[#DBC9B7]">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <div className="flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.25em] hover:text-[#B89472] transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="font-title text-3xl">
            J&nbsp;&nbsp;♡&nbsp;&nbsp;A
          </div>
        </nav>
      </Container>
    </header>
  );
}