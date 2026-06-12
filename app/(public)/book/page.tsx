"use client";

import React, { useState } from "react";

const BookingPage = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    const formData = new FormData(form);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
        setSuccess(true);
        form.reset();

        setTimeout(() => {
            setSuccess(false);
        }, 1500);
    }
};
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="max-w-3xl mx-auto px-6">

                <h1 className="text-3xl md:text-5xl font-extrabold mb-10">
                    Book Your Music Promotion
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        name="name"
                        placeholder="Your name"
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <select
                        name="service"
                        className="w-full border p-3 rounded-lg"
                        required
                    >
                        <option value="">Select service</option>
                        <option>Spotify Playlist Pitching</option>
                        <option>YouTube Promotion</option>
                        <option>TikTok Campaign</option>
                        <option>Full Package</option>
                    </select>

                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your music..."
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
                    >
                        {loading ? "Sending..." : "Book Now"}
                    </button>
                </form>
                {success && (
                    <p className="mb-6 text-green-600 font-medium">
                        ✅ Booking request sent successfully!
                    </p>
                )}
            </div>
        </section>
    );
};

export default BookingPage;