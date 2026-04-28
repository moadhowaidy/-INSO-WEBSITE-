// src/components/ui/INSOLogo.tsx

interface INSOLogoProps {
  size?: number;       // width in px — height auto-scales. Default: 48
  className?: string;
}

export default function INSOLogo({ size = 48, className }: INSOLogoProps) {
  return (
    <img
      src="/inso-logo.png"
      alt="INSO logo"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
