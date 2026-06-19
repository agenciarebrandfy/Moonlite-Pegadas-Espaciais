'use client';

import { motion } from 'motion/react';

export default function WhatsAppFloat() {
  return (
    <div id="whatsapp-float-container" className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20exclusivo%20no%20meu%20tempo!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative block w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-colors duration-300"
      >
        {/* Glow pulsing effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75"></span>

        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="relative z-10"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-.101-5.047-2.016-6.963-1.916-1.915-4.364-2.969-6.965-2.971-5.442 0-9.87 4.372-9.875 9.745-.002 1.705.509 3.37 1.479 4.85l-.973 3.553 3.656-.954zm12.39-4.848c-.28-.14-1.65-.815-1.905-.907-.255-.093-.44-.139-.626.14-.185.279-.718.907-.88 1.092-.162.186-.324.209-.604.07-.28-.14-1.184-.437-2.256-1.393-.834-.744-1.398-1.663-1.562-1.943-.165-.28-.018-.431.122-.571.126-.126.28-.325.42-.488.14-.163.185-.279.28-.465.093-.186.046-.349-.023-.488-.07-.14-.627-1.511-.86-2.07-.225-.544-.453-.471-.625-.48-.162-.008-.349-.009-.536-.009-.187 0-.49.07-.747.349-.257.28-1.026 1.003-1.026 2.447 0 1.444 1.047 2.837 1.193 3.023.146.186 2.062 3.15 4.996 4.417.698.301 1.243.481 1.667.617.7.223 1.338.192 1.843.118.563-.081 1.65-.674 1.882-1.326.232-.651.232-1.21.162-1.325-.07-.116-.255-.186-.535-.326z" />
        </svg>
      </motion.a>
    </div>
  );
}
