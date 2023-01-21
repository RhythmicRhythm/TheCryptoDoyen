import React from 'react'

const AboutCard = () => {
  return (
    <section className="aboutcard section mt-10" id="about">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row sm:flex-row lg:gap-x-[40px] sm:gap-x-[40px]">
        {/* image */}
        <div className="flex-1 order-1 lg:-order-1 sm:-order-1">
        <picture>
            
          <img
            className="h-full w-80 object-cover group-hover:scale-105 
            transition-transform duration-200 ease-in-out rounded-lg"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
            />
            </picture>
        </div>
        {/* text */}
        <div className="flex-1 flex flex-col mb-5">
          <h2 className=" about_text text-3xl font-bold mb-2">Get To Know Me</h2>
          <p className="subtitle">
          I&apos;m a professional CV/Resume Builder and Content Writer with years of experience
           in the industry. As a highly skilled and versatile writer,I have a deep understanding
            of the job market and knows what it takes to create resumes and cover letters that 
            grab the attention of hiring managers. With a keen eye for detail and the ability 
            to showcase a candidate&apos;s strengths and qualifications, I&apos;ve helped countless job
             seekers land their dream jobs. I&apos;m able to write a variety of content that can 
             effectively communicate your value to the employer. Whether it&apos;s a LinkedIn 
             profile or a personal statement, I can help you stand out and be successful 
             in your career.
          </p>
       

          {/* items */}
          <div></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutCard