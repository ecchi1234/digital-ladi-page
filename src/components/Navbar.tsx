import images from "@/assets";

export default function Navbar() {
  return (
    <div className="flex items-center container mx-auto justify-between py-6 px-4">
      {/* Logo block */}
      <div className="flex items-center gap-1">
        <img src={images.logo} />
        <p className="font-semibold text-16 text-neutral-white">Nusa Tech</p>
      </div>

      <ul className="flex items-center gap-[50px] text-neutral-white">
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Our Works</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
  );
}
