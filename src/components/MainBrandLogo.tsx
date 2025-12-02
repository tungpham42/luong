import React, { useState } from "react";
import { Image, CloseButton } from "react-bootstrap";

interface MainBrandLogoProps {
  logoSrc: string; // Link ảnh logo
  mainDomain: string; // Ví dụ: 'soft.io.vn'
  altText?: string;
  size?: number; // Chiều cao logo
  dismissible?: boolean;
}

const MainBrandLogo: React.FC<MainBrandLogoProps> = ({
  logoSrc,
  mainDomain,
  altText = "Logo chính",
  size = 40,
  dismissible = false,
}) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      className="position-absolute top-0 start-0 mb-5 d-flex align-items-center bg-white rounded shadow-sm px-2 py-1"
      style={{ zIndex: 1050 }}
    >
      <a
        href={`https://${mainDomain}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={logoSrc} alt={altText} height={size} className="me-2" />
      </a>
      {dismissible && (
        <CloseButton
          onClick={() => setShow(false)}
          className="ms-2"
          aria-label="Đóng logo brand"
        />
      )}
    </div>
  );
};

export default MainBrandLogo;
