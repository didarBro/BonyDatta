// import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-white border-t border-gray-200">
//       <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-4 py-4 px-4 text-sm text-gray-700">
//         {/* Copyright */}
//         <span className="text-gray-700">
//           © 2025 by Bony Datta.
//         </span>

//         {/* LinkedIn */}
//         <a
//           href="https://linkedin.com/in/dattabony"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-blue-600 transition"
//         >
//           <Linkedin className="w-5 h-5" />
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/8801782388822"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-green-600 transition"
//         >
//           <Phone className="w-5 h-5" />
//         </a>

//         {/* Email */}
//         <a
//           href="mailto:labonydatta@gmail.com"
//           className="hover:text-red-600 transition"
//         >
//           <Mail className="w-5 h-5" />
//         </a>

//         {/* Instagram */}
//         <a
//           href="https://instagram.com/bongram20"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-pink-500 transition"
//         >
//           <Instagram className="w-5 h-5" />
//         </a>
//       </div>
//     </footer>
//   );
// }


import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center py-4 px-4 text-sm text-gray-700">
        {/* Left: Copyright */}
        <span className="text-gray-700">
          © 2025 by Bony Datta.
        </span>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/dattabony"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <FaLinkedinIn size={20} className="text-black" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801782388822"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <IoLogoWhatsapp size={22} className="text-black" />
          </a>

          {/* Email */}
          <a
            href="mailto:labonydatta@gmail.com"
            className="transition"
          >
            <IoIosMail size={22} className="text-black" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/bongram20"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
          >
            <FaInstagramSquare size={22} className="text-black" />
          </a>
        </div>
      </div>
    </footer>
  );
}
