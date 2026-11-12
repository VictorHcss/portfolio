import type { TechIcon as TechIconType } from "@/data/stack";

interface TechIconProps {
  icon: TechIconType;
  size?: number;
  className?: string;
}

/** Renderiza um ícone de marca (simple-icons) ou um ícone do Lucide. */
export const TechIcon = ({ icon, size = 20, className }: TechIconProps) => {
  if ("path" in icon) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon aria-hidden="true" size={size} className={className} strokeWidth={1.75} />;
};
