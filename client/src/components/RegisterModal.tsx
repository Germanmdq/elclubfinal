import { useState, useEffect } from "react";
import { X, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

/* ECDLI Register Modal
   - Modal de registro para captura de leads
   - Campos: nombre, email, teléfono
   - Animación de entrada/salida
   - Validación de formulario
   - Estilo consistente con el sitio
*/

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("You're registered! Check your email for details.");

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl transform transition-all duration-500 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white text-black flex items-center justify-center">
                <Check className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-white text-2xl font-medium tracking-tight mb-2">
                You're In!
              </h3>
              <p className="text-white/60 text-base">
                Check your email for event details and next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse" />
                  <span className="font-mono text-xs uppercase text-white/50 tracking-wide">
                    FREE VIRTUAL EVENT
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-medium tracking-tighter mb-3">
                  Save Your Free Seat
                </h2>
                <p className="text-white/60 text-sm md:text-base">
                  Join ECDLI LIVE for a 3-day virtual summit that will
                  transform your 2026.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wide">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Tony"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Robbins"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tony@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 inline-flex items-center justify-center gap-2 font-medium text-center tracking-wide rounded-full duration-500 border border-[#a855f7] bg-[#a855f7] hover:bg-[#a855f7]/80 disabled:opacity-50 disabled:cursor-not-allowed text-black text-sm py-4 px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Registering...
                    </>
                  ) : (
                    "YES! SAVE MY FREE SEAT"
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-white/30 text-xs text-center mt-4">
                  By registering, you agree to receive emails from ECDLI.
                  <br />
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
