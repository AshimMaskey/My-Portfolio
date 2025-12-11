const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Everest College",
      duration: "7th Sem (Ongoing)",
      location: "Thapathali, Kathmandu",
      gpa: null,
    },
    {
      degree: "Higher Secondary Education (+2) - Science Faculty",
      institution: "Krishnaratna Ganga Secondary School",
      duration: "2019 - 2021",
      location: "Chautara-5, Sindhupalchok",
      gpa: "3.15/4.0",
    },
    {
      degree: "Secondary Education Examination (SEE)",
      institution: "Ekta Boarding High School",
      duration: "2019",
      location: "Chautara-5, Sindhupalchok",
      gpa: "3.75/4.0",
    },
  ];
  return (
    <>
      {" "}
      <section id="education" className="pt-2 mb-18 px-4 scroll-mt-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">🎓 Education</h2>
          </div>
          <div>
            <div>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500/70 dark:bg-green-400 hidden md:block"></div>

                {education.map((edu, index) => (
                  <div key={index} className="relative mb-5">
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 dark:bg-green-400 rounded-full border-4 border-gray-200 dark:border-gray-900 z-10 hidden md:block"></div>

                    <div
                      className={`flex items-center w-full ${
                        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                    >
                      <div className="hidden md:block md:w-1/2"></div>

                      <div
                        className={`w-full md:w-1/2 ${
                          index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                        }`}
                      >
                        {/* Card */}
                        <div className="bg-card cursor-pointer rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 relative">
                          {/* Card Arrow */}
                          <div
                            className={`hidden md:block absolute top-6 w-0 h-0 ${
                              index % 2 === 0
                                ? "right-0 border-l-[15px] border-l-card dark:border-l-card border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent translate-x-full"
                                : "left-0 border-r-[15px] border-r-card dark:border-r-card border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent -translate-x-full"
                            }`}
                          ></div>

                          {/* Mobile Timeline Indicator */}
                          <div className="flex md:hidden items-center mb-4">
                            <div className="w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                            <div className="h-px bg-green-500 dark:bg-green-400 flex-1"></div>
                          </div>

                          {/* Duration & GPA */}
                          <div className="flex justify-between items-start mb-3">
                            <span className="bg-purple-500 dark:bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {edu.duration}
                            </span>
                            {edu.gpa && (
                              <span className="bg-gray-200 dark:bg-gray-700 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                                GPA: {edu.gpa}
                              </span>
                            )}
                          </div>

                          {/* Degree & Institution */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg text-green-600 dark:text-green-400 font-semibold mb-1">
                            {edu.institution}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                            {edu.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
