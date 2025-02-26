import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Resend } from 'resend';

const JoinUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (data) => {
    // console.log("API Key:", process.env.REACT_APP_RESEND_API_KEY); // Debugging
    const resend = new Resend("re_AtZBGCPs_DEQE6JPXJvxteMy7Nk2zG6t6");

    try {
      await resend.emails.send({
        from: 'NuroBots <onboarding@nurobots.com>', // Domain setup needed in Resend
        to: 'anmolawasthi022@gmail.com',
        subject: 'New Crew Enlistment!',
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message || 'No message'}`,
      });
      toast.success('Enlistment Sent—Welcome to the Crew!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      toast.error('Oops—Failed to Send. Try Again!', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error('Failed to send enlistment:', error);
    }
  };

  const holoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fieldVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-[var(--rf-primary)] min-h-screen py-12 px-4 md:px-8 overflow-hidden">
      {/* Flicker Overlay */}
      <div className="absolute inset-0 animate-[flicker_2s_infinite_linear] z-0" />

      <div className="max-w-6xl mx-auto text-center relative z-20">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-vt323 text-[var(--rf-accent)] mb-6 md:mb-8 tracking-wider drop-shadow-[0_0_10px_var(--rf-link)]"
          variants={holoVariants}
          initial="initial"
          animate="animate"
        >
          Bot Enlistment Hub: Join the Crew!
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl font-roboto text-[var(--rf-text)] mb-8"
          variants={holoVariants}
          initial="initial"
          animate="animate"
        >
          Level up with NuroBots—no ranks, just sparks.
        </motion.p>

        {/* Form or Success Message */}
        <div className="relative max-w-md mx-auto">
          {submitted ? (
            <motion.p
              className="text-2xl font-vt323 text-[var(--rf-link)] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
            >
              Enlisted! Welcome to the Bot Squad!
            </motion.p>
          ) : (
            <div className="relative">
              <div className="absolute inset-0 animate-[flicker_2s_infinite_linear] z-10" />
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-20">
                <motion.div variants={fieldVariants} initial="initial" animate="animate">
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Your Name"
                    className="w-full p-3 bg-[var(--rf-secondary)]/80 text-black rounded-lg border border-[var(--rf-link)]/30 focus:border-[var(--rf-accent)]/50 focus:outline-none"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </motion.div>
                <motion.div variants={fieldVariants} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
                  <input
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    placeholder="Your Email"
                    className="w-full p-3 bg-[var(--rf-secondary)]/80 text-black rounded-lg border border-[var(--rf-link)]/30 focus:border-[var(--rf-accent)]/50 focus:outline-none"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </motion.div>
                <motion.div variants={fieldVariants} initial="initial" animate="animate" transition={{ delay: 0.2 }}>
                  <textarea
                    {...register('message')}
                    placeholder="Why join the crew? (optional)"
                    className="w-full p-3 bg-[var(--rf-secondary)]/80 text-black rounded-lg border border-[var(--rf-link)]/30 focus:border-[var(--rf-accent)]/50 focus:outline-none resize-none h-32"
                  />
                </motion.div>
                <motion.div variants={fieldVariants} initial="initial" animate="animate" transition={{ delay: 0.3 }}>
                  <motion.button
                    type="submit"
                    className="w-full bg-[var(--rf-accent)] text-[var(--rf-primary)] font-vt323 py-2 px-6 rounded-full border-2 border-[var(--rf-link)] text-xl shadow-[0_0_10px_var(--rf-accent)] hover:shadow-[0_0_20px_var(--rf-link),_0_0_30px_var(--rf-link)] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Drop In
                  </motion.button>
                </motion.div>
              </form>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default JoinUs;