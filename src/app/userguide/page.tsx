import Footer from '@/components/Footer'
import React from 'react'

const Page = () => {
  return (
    <div className='flex-none text-center w-full bg-[#0F172A] text-[#F8FAFC]'>
        
        <div className="p-4">
      <h2 className="text-xl pb-2">Two Keys:</h2>
      <div>
        <strong>Public Key:</strong> &quot;svibeta1st&quot;
      </div>
      <div>
        <strong>Private Key:</strong> &quot;psvi001&quot;
      </div>

      <h2 className="text-xl pb-2 mt-4">1. Data Sharing:</h2>
      <div>
        <strong>Public Key:</strong> Users with the same public key can share common data and view each other&apos;s chats with the AI.
      </div>
      <div>
        <strong>Private Key:</strong> Each user with a private key gets a unique chat with the AI on each tab. Data is retained even if the page is refreshed, but only within the same page.
      </div>

      <h2 className="text-xl pb-2 mt-4">2. Data Control:</h2>
      <div>
        <strong>Public Key:</strong> Users with the public key can delete data shared with the AI.
      </div>
      <div>
        <strong>Private Key:</strong> Users with the private key have control over their own data, but cannot delete data shared with the AI by others.
      </div>

      <h2 className="text-xl pb-2 mt-4">3. Data Persistence:</h2>
      <div>
        <strong>Public Key:</strong> Data shared with the AI using the public key can be deleted by any user with the same key.
      </div>
      <div>
        <strong>Private Key:</strong> Data is retained even if the page is refreshed, but only within the same page and by the same user.
      </div>

      <h2 className="text-xl pb-2 mt-4">4. Security:</h2>
      <div>
        <strong>Public Key:</strong> Offers a level of transparency and collaboration among users with the same key.
      </div>
      <div>
        <strong>Private Key:</strong> Offers a higher level of privacy and control over individual data.
      </div>

      <h2 className="text-xl pb-2 mt-4">5. Use Cases:</h2>
      <div>
        <strong>Public Key:</strong> Ideal for collaborative projects or discussions where shared data is beneficial.
      </div>
      <div>
        <strong>Private Key:</strong> Ideal for individual tasks or sensitive conversations where privacy and data control are paramount.
      </div>

      <h2 className="text-xl pb-2 mt-4">Conclusion:</h2>
      <div>
        <strong>Public Key:</strong> Promotes collaboration and shared data among users with the same key.
      </div>
      <div>
        <strong>Private Key:</strong> Offers a higher level of privacy and control over individual data, with unique chat sessions on each tab and data retention on page refresh.
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Page