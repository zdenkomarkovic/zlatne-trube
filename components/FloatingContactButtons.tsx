"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-1 ">
      <div className="brut-container py-1">
        <div className="flex gap-2 md:gap-4 justify-center">
          <Link
            href="tel:+381639662325"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-full px-2 md:px-4 py-1 md:py-2 font-bold text-white bg-gradient-to-r from-primary to-accent border-2 border-primary/30 shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.5)] transition-all hover:scale-105"
          >
            <Phone size={20} />
            <span className="text-xs md:text-lg">Pozovi</span>
          </Link>
          <Link
            href="viber://chat?number=%2B381639662325"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-full px-2 md:px-4 py-1 md:py-2 font-bold text-white bg-gradient-to-r from-purple-600 to-purple-500 border-2 border-purple-400/30 shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.002 0C5.375 0 0 5.373 0 12c0 2.125.555 4.114 1.527 5.846L0 24l6.304-1.654A11.946 11.946 0 0012.002 24C18.627 24 24 18.627 24 12S18.627 0 12.002 0zm5.924 17.171c-.294.826-.866 1.393-1.693 1.693-1.586.574-5.413.133-7.571-1.567-1.742-1.372-2.96-3.389-3.05-3.537-.089-.148-1.319-1.753-1.319-3.345 0-1.591.835-2.374 1.131-2.698.296-.323.647-.404.863-.404.216 0 .432.002.62.011.199.01.466-.075.728.556.263.631.896 2.184.975 2.343.079.158.131.344.027.544-.105.201-.158.325-.315.501-.158.176-.331.394-.473.53-.158.157-.322.326-.138.639.183.314.817 1.344 1.753 2.178 1.206.996 2.223 1.307 2.537 1.454.314.148.498.124.682-.075.184-.199.79-.921.998-1.237.209-.315.418-.263.705-.158.287.105 1.822.859 2.135 1.016.314.158.523.236.598.367.075.131.075.754-.219 1.58z" />
            </svg>
            <span className="text-xs md:text-lg">Viber</span>
          </Link>
          <Link
            href="https://wa.me/381639662325"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 rounded-full px-2 md:px-4 py-1 md:py-2 font-bold text-white bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-400/30 shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-xs md:text-lg">WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
