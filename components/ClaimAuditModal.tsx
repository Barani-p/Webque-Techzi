import React, { useState } from "react";

interface ClaimAuditModalProps {
  onClose: () => void;
}

// Replace this with your n8n webhook URL
const N8N_WEBHOOK_URL =
  "https://your-n8n-server.com/webhook/form-submit";

const WHATSAPP_PHONE = "919363055985"; // +91 9363055985
const CALENDLY_URL = "https://calendly.com/bharani20605/30min";

const ClaimAuditModal: React.FC<ClaimAuditModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send data");

      setSubmitted(true); // hide button & show success
      setName("");
      setEmail("");
      setMessage("");

      // auto-reset form after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Failed to save lead:", err);
      alert("❌ Failed to save lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      body
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-300 hover:text-white font-bold text-lg"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4 text-center">
          Claim Your Free Automation Audit
        </h3>

        {/* FORM -> sends data to n8n webhook */}
        <form onSubmit={submitForm} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Short Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Submit Button */}
          {!submitted && (
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit "}
            </button>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="mt-3 text-center text-green-400 text-sm">
              ✅ Your details have been saved!
            </div>
          )}
        </form>

        <div className="text-xs text-gray-400 mt-2 text-center">
          After submitting, continue via WhatsApp or Book a Call
        </div>

        {/* WhatsApp + Calendly */}
        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            onClick={openWhatsApp}
            className="flex-1 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition"
          >
            Open WhatsApp
          </button>
          <button
            onClick={() => setShowCalendly(!showCalendly)}
            className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            {showCalendly ? "Hide Booking" : "Book Call"}
          </button>
        </div>

        {/* Calendly iframe */}
        {showCalendly && (
          <div className="mt-4">
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="500"
              frameBorder="0"
              className="rounded-lg"
              title="Calendly Booking"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimAuditModal;
