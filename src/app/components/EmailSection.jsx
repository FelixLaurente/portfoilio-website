import React from 'react'


const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            {""}
            I'm currently looking for new opportunities, my inbox is alwas open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="cocials flex flex-row gap-2">  
        <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
        <svg aria-hidden="true" 
             class="octicon octicon-mark-github" 
             height="50px" 
             version="1.1" 
             viewBox="0 0 16 16" 
             width="50px">
                <path 
                fill-rule="evenodd" 
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
               </path>
        </svg>
        </a>
       
        <a href="https://linkedin.com" aria-label="Homepage" class="footer-octicon" title="LinkedIn">
        <svg width="50px" 
             height="50px" 
             viewBox="0 0 24 24" 
             role="img" 
             xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z">
                 </path>   
            </svg>
        </a>
        </div>
        </div>
        
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                <label htmlFor="email" className="text-white mb-2 block text-sm font-medium" >Your Email</label>
                <input 
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email"
                />
                </div>

                <div className="mb-6">
                <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium" >Subject</label>
                <input 
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying"
                />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white bloc text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."
                        />
                </div>
                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Me</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
