import React from "react";

const About = () => {
  return (
   <div>
     <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Event Lovers Worldwide
            </h2>
            <p className="text-lg leading-7 mb-8">
              EventFlow has been connecting people with extraordinary experiences for over 5 years.
              Our platform makes discovering and booking events effortless, whether you're looking
              for professional development, entertainment, or cultural experiences.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Verified Events Only",
                "24/7 Customer Support",
                "Money-Back Guarantee",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <div className="bg-gradient-to-br from-red-600 to-red-900 p-10 rounded-2xl">
              <p className="text-lg italic mb-6">
                "EventFlow made booking my conference tickets so easy. The whole process took less
                than 2 minutes!"
              </p>
              <div className="text-sm">
                <strong className="block mb-1">Juber Qureshi</strong>
                <span className="opacity-80">Product Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default About;
