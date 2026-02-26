"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  subject: z.string().min(3, "Select a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    toast.success("Thanks! We will get back to you shortly.");
    reset();
  };

  return (
    <div>
      <PageHeader
        title="Let's work together"
        subtitle="Have a project in mind? Get in touch and let's discuss how I can help."
        kicker="Contact"
      />

      <section className="section-padding bg-grid">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-950"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Contact form
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                  placeholder="you@email.com"
                />
                {errors.email ? (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                  placeholder="+91 1234567890"
                />
                {errors.phone ? (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                ) : null}
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Subject
                </label>
                <select
                  {...register("subject")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <option value="">Select a subject</option>
                  <option value="Project">Project inquiry</option>
                  <option value="Freelance">Freelance work</option>
                  <option value="Collaboration">Collaboration</option>
                </select>
                {errors.subject ? (
                  <p className="text-xs text-red-500">{errors.subject.message}</p>
                ) : null}
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Message
              </label>
              <textarea
                {...register("message")}
                className="h-28 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
                placeholder="Tell us about your requirements"
              />
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>

          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Contact information</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                India · Available for remote work
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Email: amitmaurya9929@gmail.com
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Phone: +91-9939522297
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                GitHub: github.com/amitkmaurya
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Available for freelance and full-time projects
              </p>
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
              <h3 className="text-lg font-semibold">Google map</h3>
              <p className="mt-2 text-sm text-slate-200">
                Embed your live Google Map iframe here for the exact location.
              </p>
              <div className="relative mt-6 h-40 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Workspace preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster position="top-center" />
    </div>
  );
}
