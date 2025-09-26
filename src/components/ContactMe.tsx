export default function ContactMe(){
    return(
        <section id="contactme" className="bg-gradient-to-b from-[#091E2B] to-[#1E5E86] flex flex-col h-180 z-0 justify-center items-center">
            <div className="text-center flex flex-col justify-center items-center px-16 h-1/5 gap-2">
                <h1 className="text-white text-4xl font-poppins font-semibold text-center">Contact Me</h1>
                <p className="text-white font-openSans">Let's Create Fabulous Things Together!</p>
            </div>
            <div className="h-4/5 my-5 w-full">
                <div className="max-w-lg mx-auto p-6 shadow-lg rounded-lg">
                    <form action="#" method="POST">
                        <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-white">Nama Lengkap</label>
                        <input type="text" id="fullName" name="fullName" className="text-white mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
                        </div>
                        
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Alamat Email</label>
                        <input type="email" id="email" name="email" className="text-white mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
                        </div>
                        
                        <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-white">Subjek</label>
                        <input type="text" id="subject" name="subject" className="text-white mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
                        </div>
                        
                        <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-white">Pesan</label>
                        <textarea id="message" name="message" className="text-white mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                        </div>
                        
                        <div>
                        <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
            <div></div>
        </section>
    )
}