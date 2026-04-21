const FULL_LOGO_SRC = `${import.meta.env.BASE_URL}krishna-webdesign-logo-v2.jpeg`;
const MARK_LOGO_SRC = `${import.meta.env.BASE_URL}krishna-webdesign-mark-v2.png`;

type BrandLogoProps = {
  size?: "nav" | "footer" | "login";
  linked?: boolean;
};

const sizeClass = {
  nav: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-9 w-9 sm:h-10 sm:w-10",
  login: "h-24 w-64",
};

export function BrandLogo({ size = "nav", linked = true }: BrandLogoProps) {
  const isFullLogo = size === "login";
  const logo = (
    <span className={isFullLogo ? "inline-flex" : "brand-logo-shell"}>
      <img
        src={isFullLogo ? FULL_LOGO_SRC : MARK_LOGO_SRC}
        alt="KRISHNA.WEBDESIGN"
        width={isFullLogo ? 931 : 512}
        height={isFullLogo ? 757 : 512}
        className={`brand-logo-image ${sizeClass[size]} ${
          isFullLogo ? "rounded-xl object-contain" : "rounded-full object-cover"
        }`}
      />
    </span>
  );

  if (!linked) {
    return <div className="group inline-flex items-center">{logo}</div>;
  }

  return (
    <a
      href="#home"
      aria-label="KRISHNA.WEBDESIGN home"
      className="group inline-flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      {logo}
    </a>
  );
}
