import Image from "next/image";
import type { IconBaseProps } from "react-icons";
import { MdEmail } from "react-icons/md";

type PlatformImageIconProps = Pick<IconBaseProps, "className" | "size" | "style">;

export function WhatsAppIcon({ className, size = 20, style }: PlatformImageIconProps) {
  return (
    <Image
      src="/images/icons/whatsapp.png"
      alt=""
      width={48}
      height={48}
      aria-hidden="true"
      className={className}
      style={{ ...style, width: size, height: size }}
    />
  );
}

export function InstagramIcon({ className, size = 20, style }: PlatformImageIconProps) {
  return (
    <Image
      src="/images/icons/instagram.png"
      alt=""
      width={512}
      height={512}
      aria-hidden="true"
      className={className}
      style={{ ...style, width: size, height: size }}
    />
  );
}

export function TikTokIcon({ className, size = 20, style }: PlatformImageIconProps) {
  return (
    <Image
      src="/images/icons/tiktok.gif"
      alt=""
      width={48}
      height={48}
      unoptimized
      aria-hidden="true"
      className={className}
      style={{ ...style, width: size, height: size }}
    />
  );
}

export function EmailIcon(props: IconBaseProps) {
  return <MdEmail aria-hidden="true" {...props} />;
}
